import { Component, OnInit } from '@angular/core';

interface Review {
  name: string;
  paket: string;
  rating: number;
  comment: string;
  date: string;
  ownerKey: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  activeTab: string = 'B';
  private waNumber = '6283898525612';
  private storageKey = 'devina_reviews';
  private sessionKeyStorageKey = 'devina_session_key';

  reviews: Review[] = [];
  showSuccess = false;
  showDeleteConfirm: number | null = null;

  newReview = { name: '', paket: 'A', rating: 0, comment: '' };
  formErrors: { name?: string; rating?: string; comment?: string } = {};

  private getSessionKey(): string {
    let key = sessionStorage.getItem(this.sessionKeyStorageKey);
    if (!key) {
      key = 'sk_' + Math.random().toString(36).substr(2, 16) + '_' + Date.now();
      sessionStorage.setItem(this.sessionKeyStorageKey, key);
    }
    return key;
  }

  get averageRating(): number {
    if (!this.reviews.length) return 0;
    return this.reviews.reduce((s, r) => s + r.rating, 0) / this.reviews.length;
  }

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    try {
      const data = localStorage.getItem(this.storageKey);
      this.reviews = data ? JSON.parse(data) : [];
    } catch { this.reviews = []; }
  }

  saveReviews(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.reviews));
  }

  canSubmit(): boolean {
    return !!this.newReview.name.trim() && !!this.newReview.paket && this.newReview.rating > 0 && !!this.newReview.comment.trim();
  }

  clearError(field: string): void {
    delete (this.formErrors as any)[field];
  }

  submitReview(): void {
    this.formErrors = {};
    let hasError = false;

    if (!this.newReview.name.trim()) {
      this.formErrors.name = 'Nama tidak boleh kosong.';
      hasError = true;
    }
    if (this.newReview.rating === 0) {
      this.formErrors.rating = 'Pilih rating bintang terlebih dahulu.';
      hasError = true;
    }
    if (!this.newReview.comment.trim()) {
      this.formErrors.comment = 'Komentar tidak boleh kosong.';
      hasError = true;
    }
    if (hasError) return;

    const now = new Date();
    const date = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const ownerKey = this.getSessionKey();
    this.reviews.unshift({ ...this.newReview, date, ownerKey });
    this.saveReviews();
    this.newReview = { name: '', paket: 'A', rating: 0, comment: '' };
    this.formErrors = {};
    this.showSuccess = true;
    setTimeout(() => this.showSuccess = false, 3500);
  }

  canDelete(review: Review): boolean {
    return review.ownerKey === this.getSessionKey();
  }

  confirmDelete(index: number): void {
    this.showDeleteConfirm = index;
  }

  cancelDelete(): void {
    this.showDeleteConfirm = null;
  }

  deleteReview(index: number): void {
    this.reviews.splice(index, 1);
    this.saveReviews();
    this.showDeleteConfirm = null;
  }

  // ===== FILTER KATA KASAR OTOMATIS =====
  private kataKasar: string[] = [
    'anjing','anjir','bangsat','babi','goblok','bodoh','tolol','idiot','brengsek',
    'keparat','bajingan','setan','iblis','tai','tahi','kampret','asu','jancok',
    'jangkrik','kontol','memek','ngentot','pepek','lonte','pelacur','bajigur',
    'sialan','celaka','bedebah','kurang ajar','monyet','jahanam','laknat',
    'haram jadah','mampus','modar','jembut','geblek','pekok','matamu','raimu',
    'jelek banget','sangat buruk','sangat jelek','mengecewakan banget',
    'penipu','tipu daya','nipu','barang palsu','tidak asli','kualitas jelek',
    'kualitas buruk','boros','rugi beli','sayang uang','buang uang'
  ];

  filterKataKasar(text: string): string {
    let result = text;
    for (const kata of this.kataKasar) {
      const regex = new RegExp(kata.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      const bintang = '*'.repeat(Math.max(kata.length - 2, 1));
      const sensor = kata.charAt(0) + bintang + kata.charAt(kata.length - 1);
      result = result.replace(regex, sensor);
    }
    return result;
  }

  // ===== MODE ADMIN TERSEMBUNYI =====
  isAdminMode = false;
  adminShowConfirm: number | null = null;
  private titleTapCount = 0;
  private tapTimer: any = null;

  onTitleTap(): void {
    this.titleTapCount++;
    clearTimeout(this.tapTimer);
    this.tapTimer = setTimeout(() => {
      this.titleTapCount = 0;
    }, 2000);

    if (this.titleTapCount >= 5) {
      this.titleTapCount = 0;
      clearTimeout(this.tapTimer);
      this.isAdminMode = !this.isAdminMode;
      this.adminShowConfirm = null;
    }
  }

  adminConfirmDelete(index: number): void {
    this.adminShowConfirm = index;
  }

  adminCancelDelete(): void {
    this.adminShowConfirm = null;
  }

  adminDeleteReview(index: number): void {
    this.reviews.splice(index, 1);
    this.saveReviews();
    this.adminShowConfirm = null;
  }

  exitAdminMode(): void {
    this.isAdminMode = false;
    this.adminShowConfirm = null;
  }

  getRatingLabel(r: number): string {
    return ['', 'Sangat Buruk 😞', 'Kurang Puas 😐', 'Cukup Baik 🙂', 'Puas 😊', 'Sangat Puas! 🤩'][r] || 'Pilih rating';
  }

  getStarArray(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  getEmptyStarArray(rating: number): number[] {
    return Array(5 - Math.round(rating)).fill(0);
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleAll(): void {
    this.activeTab = this.activeTab === 'all' ? 'B' : 'all';
  }

  orderPackage(paket: string, harga: number): void {
    const formatted = new Intl.NumberFormat('id-ID').format(harga);
    const msg = encodeURIComponent(
      `Halo Kak DevinaPaket! 👋\n\nSaya ingin memesan:\n🛍️ *Paket ${paket}*\n💰 Harga: *Rp ${formatted}/bulan*\n\nMohon info ketersediaan dan cara pemesanannya. Terima kasih! 🌙✨`
    );
    window.open(`https://wa.me/${this.waNumber}?text=${msg}`, '_blank');
  }

  openWhatsApp(): void {
    const msg = encodeURIComponent(`Halo Kak DevinaPaket! 👋\n\nSaya tertarik dengan paket hamper lebaran Anda. Bisa minta info lebih lanjut? Terima kasih! 🌙`);
    window.open(`https://wa.me/${this.waNumber}?text=${msg}`, '_blank');
  }
}

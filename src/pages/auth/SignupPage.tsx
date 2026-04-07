import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock API latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <Helmet>
        <title>Daftar | Onward Connect</title>
        <meta
          name="description"
          content="Daftar untuk akses penuh ke Onward TMS dan WMS - Solusi logistik terpadu"
        />
      </Helmet>

      {/* Full Screen Split Layout */}
      <div className="flex w-full h-screen bg-surface-950 text-white overflow-hidden font-sans">
        {/* LEFT SIDE - Form Content */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto scrollbar-hide relative p-8 sm:p-12 md:p-16 xl:p-24 z-10 flex flex-col">
          {/* Subtle background glow for form area */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none min-h-200">
            <div className="absolute w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] top-0 left-0 animate-pulse" />
            <div className="absolute w-125 h-125 bg-accent-500/10 rounded-full blur-[120px] bottom-0 right-0 opacity-50" />
          </div>

          <div className="w-full max-w-lg mx-auto my-auto relative py-8">
            {/* Logo */}
            <div className="mb-8">
              <Link
                to="/"
                className="inline-block transition-transform hover:scale-105"
              >
                <img
                  src="/logotype-white.png"
                  alt="Onward Connect Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mb-3">
                Buat Akun Perusahaan
              </h1>
              <p className="text-lg text-surface-400">
                Dapatkan akses penuh ke TMS dan WMS untuk transformasi rantai pasok
                cerdas.
              </p>
            </div>

            {submitted ? (
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-2xl p-8 text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-10 h-10 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="font-black text-white text-2xl font-display mb-2">
                  Pendaftaran Berhasil!
                </h2>
                <p className="text-surface-400 text-base leading-relaxed">
                  Terima kasih, tim kami akan segera memverifikasi data dan
                  menghubungi Anda dalam 1x24 jam kerja.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 animate-fade-in"
              >
                {/* 2-Column layout for input fields taking advantage of the wider container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-semibold text-surface-300 mb-2"
                    >
                      Nama Perusahaan <span className="text-accent-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="PT Onward Logistik"
                      className="w-full bg-surface-900 border-2 border-surface-800 rounded-xl px-5 py-3.5 text-white placeholder:text-surface-600 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-surface-300 mb-2"
                    >
                      Nama Lengkap <span className="text-accent-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-surface-900 border-2 border-surface-800 rounded-xl px-5 py-3.5 text-white placeholder:text-surface-600 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-surface-300 mb-2"
                    >
                      Email Bisnis <span className="text-accent-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@perusahaan.com"
                      className="w-full bg-surface-900 border-2 border-surface-800 rounded-xl px-5 py-3.5 text-white placeholder:text-surface-600 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-surface-300 mb-2"
                    >
                      Nomor Telepon <span className="text-accent-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 812 3456 7890"
                      className="w-full bg-surface-900 border-2 border-surface-800 rounded-xl px-5 py-3.5 text-white placeholder:text-surface-600 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="pt-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-surface-300 mb-2"
                  >
                    Alamat Perusahaan <span className="text-accent-400">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Jl. Sudirman No. 123, Jakarta Selatan, DKI Jakarta 12190"
                    rows={3}
                    className="w-full bg-surface-900 border-2 border-surface-800 rounded-xl px-5 py-3.5 text-white placeholder:text-surface-600 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full gradient-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
                  >
                    {loading ? (
                      <svg
                        className="w-7 h-7 text-white animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center">
                          Daftar Sekarang
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-surface-500 mt-4 leading-relaxed">
                    Dengan mendaftar, Anda menyetujui Syarat & Ketentuan serta
                    <br /> Kebijakan Privasi Onward Connect.
                  </p>
                </div>
              </form>
            )}

            {/* Login Link */}
            <div
              className={`mt-8 text-surface-400 ${submitted ? "text-center" : ""}`}
            >
              Sudah memiliki akun?{" "}
              <Link
                to="/login"
                className="text-primary-400 font-bold hover:text-primary-300 transition-colors"
              >
                Masuk di sini
              </Link>
            </div>

            {/* Back to Home Mobile-only (since desktop has nav space or side panel) */}
            <div
              className={`mt-8 pt-6 border-t border-surface-800/50 ${submitted ? "text-center" : ""}`}
            >
              <Link
                to="/"
                className="text-surface-500 hover:text-surface-300 font-medium transition-colors inline-flex items-center group"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Kembali ke beranda
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Abstract Visual / Banner */}
        <div className="hidden lg:block lg:w-1/2 relative bg-surface-900 border-l border-surface-800/50 overflow-hidden group">
          <img
            src="/images/login_banner.png"
            alt="Logistics Infrastructure"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-surface-950 via-surface-950/40 to-transparent" />
          <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay" />

          {/* Subtle text overlay */}
          <div className="absolute bottom-16 left-16 right-16 z-10 glass p-8 rounded-3xl border border-surface-600/30 backdrop-blur-md">
            <h2 className="text-3xl font-black text-white font-display uppercase tracking-wider mb-2">
              The Digital Supply Chain
            </h2>
            <p className="text-surface-300 text-lg leading-relaxed">
              Mengakselerasi operasional pergudangan dan eksekusi transportasi
              melalui intelijen real-time dan ekosistem logistik yang terhubung
              secara penuh.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

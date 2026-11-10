import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

// Social icons as inline SVGs (lucide-react version doesn't export social icons)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const footerLinks = {
  shop: [
    { href: "/products", label: "كل الأحذية" },
    { href: "/trending", label: "الأكثر مبيعاً" },
    { href: "/products?filter=new", label: "وصل حديثاً" },
    { href: "/products?filter=sale", label: "عروض وخصومات" },
  ],
  help: [
    { href: "/faq", label: "الأسئلة الشائعة" },
    { href: "/size-guide", label: "دليل المقاسات" },
    { href: "/returns", label: "سياسة الاسترجاع" },
    { href: "/shipping", label: "الشحن والتوصيل" },
  ],
  company: [
    { href: "/about", label: "من نحن" },
    { href: "/branches", label: "فروعنا" },
    { href: "/careers", label: "وظائف" },
    { href: "/contact", label: "تواصل معنا" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <span className="font-black text-3xl">Toky</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              توكي وجهتك الأولى للأحذية العصرية في مصر. نجمع أفضل الماركات العالمية بأسعار تناسب الجميع.
            </p>
            {/* Contact */}
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-orange-400 shrink-0" />
                <span>19797 (خط ساخن)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-orange-400 shrink-0" />
                <span>hello@toky.eg</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-400 shrink-0" />
                <span>مول سيتي ستارز، مدينة نصر، القاهرة</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: FacebookIcon, label: "Facebook" },
                { Icon: TwitterIcon, label: "Twitter" },
                { Icon: YoutubeIcon, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">التسوق</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-orange-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">مساعدة</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-orange-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">الشركة</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-orange-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white">اشترك في النشرة البريدية</h4>
              <p className="text-slate-400 text-sm">احصل على أحدث العروض والوصولات مباشرة في بريدك</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني..."
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap">
                اشترك
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© 2026 Toky. جميع الحقوق محفوظة.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">الشروط والأحكام</Link>
          </div>
          <div className="flex gap-2 items-center">
            <span>نقبل:</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">Visa</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">Mastercard</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">Fawry</span>
            <span className="bg-slate-800 px-2 py-0.5 rounded text-xs">Valu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

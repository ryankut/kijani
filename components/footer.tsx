export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition">All Products</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Skincare</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Makeup</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Sets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition">About</a></li>
              <li><a href="/support" className="hover:opacity-100 transition">Support</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Shipping</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Returns</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="opacity-90 mb-3 text-xs">Get exclusive offers and beauty tips</p>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-lg bg-primary-foreground text-primary text-sm"
            />
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
          <p className="mb-2">&copy; 2025 REHHA. All rights reserved.</p>
          <p className="text-xs">Designed & Developed by Sujan Das under the © 2025 Wearofit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

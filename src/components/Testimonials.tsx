
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, img }: { quote: string, author: string, role: string, img: string }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-primary fill-primary" />
            ))}
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-4">"{quote}"</h4>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            Sentra has been a game-changer for our stores. We've seen a drastic reduction in inventory shrinkage and the real-time alerts allow our security team to respond immediately.
        </p>
        <div className="flex items-center gap-4">
            <img src={img} alt={author} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <div className="font-bold text-slate-900">{author}</div>
                <div className="text-xs text-slate-500">{role}</div>
            </div>
        </div>
    </div>
);

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
                quote="Reduced theft by 87%"
                author="Sarah Johnson"
                role="Loss Prevention Director, Major Retailer"
                img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard 
                quote="Game-changer for our stores"
                author="Michael Chen"
                role="Operations VP, Retail Chain"
                img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
            />
            <TestimonialCard 
                quote="ROI within 3 months"
                author="Emma Williams"
                role="Security Manager"
                img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
            />
        </div>
      </div>
    </section>
  );
};

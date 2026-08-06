import { Github, Linkedin, Twitter, MessageCircle, Phone, Mail } from 'lucide-react';

const SOCIALS = [
  { href: "https://github.com/HON-AIM", label: "GitHub", Icon: Github, brand: "github" },
  {
    href: "https://www.linkedin.com/in/israel-adeosun-182b78235",
    label: "LinkedIn",
    Icon: Linkedin,
    brand: "linkedin",
  },
  { href: "https://x.com/IsraelMiracle13", label: "X", Icon: Twitter, brand: "x" },
  { href: "https://wa.me/2349036055170", label: "WhatsApp", Icon: MessageCircle, brand: "whatsapp" },
  { href: "tel:+2349036055170", label: "Phone", Icon: Phone, brand: "phone" },
  { href: "mailto:israelmiracle12@gmail.com", label: "Email", Icon: Mail, brand: "email" },
];

const ConnectWithUs = () => {
  return (
    <div className="connect-with-us">
      <p className="section-heading-eyebrow">OR CONNECT DIRECTLY</p>
      <h3 className="mt-2 font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ember via-electric to-signal">
        Connect <span className="text-white">With Us</span>
      </h3>

      <div
        className="relative w-full mt-5 rounded-2xl bg-gradient-to-br from-surface to-ink border border-surface-border overflow-hidden p-4 transition-all duration-500 hover:scale-[1.02]"
        style={{
          boxShadow: "0 0 40px rgba(255, 122, 61, 0.18), 0 0 60px rgba(108, 140, 255, 0.12)",
        }}
      >
        <div className="flex flex-wrap justify-start gap-4">
          {SOCIALS.map(({ href, label, Icon, brand }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className={`social-icon ${brand}`}
            >
              <div className="icon-container">
                <Icon size={22} className="h-[22px] w-[22px] text-white" />
              </div>
              <span className="icon-label">{label}</span>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .connect-with-us .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .connect-with-us .icon-container {
          display: inline-flex;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .connect-with-us .social-icon:hover .icon-container {
          transform: translateY(-6px) scale(1.1);
        }

        .connect-with-us .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(3px);
        }

        .connect-with-us .icon-label {
          margin-top: 8px;
          color: #f5f5f7;
          font-size: 12px;
          font-weight: 500;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .connect-with-us .social-icon:hover svg {
          animation: cwu-shake 0.5s;
        }

        @keyframes cwu-shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }

        .connect-with-us .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .connect-with-us .social-icon:hover .icon-container::before {
          opacity: 1;
        }

        .connect-with-us .social-icon.github:hover .icon-container {
          background: #333;
          box-shadow: 0 0 20px rgba(51, 51, 51, 0.6);
        }

        .connect-with-us .social-icon.linkedin:hover .icon-container {
          background: #0077b5;
          box-shadow: 0 0 20px rgba(0, 119, 181, 0.6);
        }

        .connect-with-us .social-icon.x:hover .icon-container {
          background: #1da1f2;
          box-shadow: 0 0 20px rgba(29, 161, 242, 0.6);
        }

        .connect-with-us .social-icon.whatsapp:hover .icon-container {
          background: #25d366;
          box-shadow: 0 0 20px rgba(37, 211, 102, 0.6);
        }

        .connect-with-us .social-icon.phone:hover .icon-container {
          background: #ff7a3d;
          box-shadow: 0 0 20px rgba(255, 122, 61, 0.6);
        }

        .connect-with-us .social-icon.email:hover .icon-container {
          background: #6c8cff;
          box-shadow: 0 0 20px rgba(108, 140, 255, 0.6);
        }
      `}</style>
    </div>
  );
};

export default ConnectWithUs;

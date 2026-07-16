import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from './Shared';
import { useState } from 'react';
import { Copy, Download, CheckCircle2, ShieldCheck, QrCode } from 'lucide-react';

export function DonateSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDonated = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=upi://pay?pa=mustaq123qr@fbl%26pn=Mushtaq%20M';
    link.download = 'ARTORYX26_Donation_QR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="donate" className="py-24 px-6 relative bg-brand-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-yellow/10 blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-green/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeader 
          title="Support ARTORYX'26" 
          subtitle="Every contribution helps us empower talented students and create an unforgettable arts festival." 
        />
        
        <div className="mt-16 bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-8 md:p-12">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* QR Code Column */}
            <div className="flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-brand-dark/5"
              >
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=upi://pay?pa=mustaq123qr@fbl%26pn=Mushtaq%20M" 
                  alt="Federal Bank QR Code" 
                  className="w-64 h-64 object-contain"
                />
              </motion.div>
              
              <button 
                onClick={downloadQR}
                className="flex items-center gap-2 text-brand-blue font-bold hover:text-brand-green transition-colors"
              >
                <Download size={20} />
                Download QR Code
              </button>
            </div>

            {/* Details Column */}
            <div className="flex flex-col gap-6">
              
              <div className="flex items-center gap-2 text-brand-green font-bold bg-brand-green/10 px-4 py-2 rounded-full self-start">
                <ShieldCheck size={20} />
                <span>Secure Donation</span>
              </div>

              <div className="space-y-4">
                <DetailRow label="Account Name" value="Mushtaq M" />
                <DetailRow label="Bank" value="The Federal Bank Ltd" />
                <DetailRow label="Branch" value="St. Mark's Road, Bangalore" />
                
                <CopyRow 
                  label="Account Number" 
                  value="11040200038795" 
                  isCopied={copiedField === 'acc'} 
                  onCopy={() => copyToClipboard('11040200038795', 'acc')} 
                />
                
                <CopyRow 
                  label="IFSC" 
                  value="FDRL0001104" 
                  isCopied={copiedField === 'ifsc'} 
                  onCopy={() => copyToClipboard('FDRL0001104', 'ifsc')} 
                />
                
                <CopyRow 
                  label="UPI ID" 
                  value="mustaq123qr@fbl" 
                  isCopied={copiedField === 'upi'} 
                  onCopy={() => copyToClipboard('mustaq123qr@fbl', 'upi')} 
                />

                <DetailRow label="Phone" value="+91 7994556808" />
                <DetailRow label="Email" value="majlismarkhins@gmail.com" />
              </div>

              <button 
                onClick={handleDonated}
                className="mt-4 w-full py-4 bg-brand-green text-brand-white font-bold uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex justify-center items-center gap-2"
              >
                <CheckCircle2 size={24} />
                I've Donated
              </button>

            </div>
          </div>
          
          <div className="mt-12 text-center text-brand-dark/70 text-sm max-w-2xl mx-auto font-medium bg-brand-beige/50 p-6 rounded-2xl border border-brand-dark/5">
            "100% of your contribution will be used to support ARTORYX'26, student development, cultural programs, and community initiatives."
          </div>

        </div>

      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white shadow-2xl rounded-2xl p-6 border-l-8 border-brand-green flex items-center gap-4 max-w-md w-full"
          >
            <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-lg">Thank you!</h4>
              <p className="text-brand-dark/70 text-sm">We deeply appreciate your generous support for ARTORYX'26.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

function DetailRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-brand-dark/5">
      <span className="text-brand-dark/60 text-sm font-medium mb-1 sm:mb-0">{label}</span>
      <span className="text-brand-dark font-bold text-right">{value}</span>
    </div>
  );
}

function CopyRow({ label, value, isCopied, onCopy }: { label: string, value: string, isCopied: boolean, onCopy: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-brand-dark/5 group">
      <span className="text-brand-dark/60 text-sm font-medium mb-1 sm:mb-0">{label}</span>
      <div className="flex items-center justify-end gap-3">
        <span className="text-brand-dark font-bold text-right">{value}</span>
        <button 
          onClick={onCopy}
          className={`p-2 rounded-lg transition-colors ${isCopied ? 'bg-brand-green text-white' : 'bg-brand-dark/5 text-brand-dark/60 hover:bg-brand-yellow hover:text-brand-dark'}`}
          title={`Copy ${label}`}
        >
          {isCopied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { MagneticButton } from './motion/MagneticButton';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-mono-950/85 p-2 sm:p-4 backdrop-blur-md animate-fade-in">
      <div className="flex flex-col w-full max-w-5xl h-[92vh] rounded-2xl border border-aurora-indigo/30 bg-mono-900 shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-mono-800/80 bg-mono-850 px-3 sm:px-6 py-2.5 sm:py-3 shrink-0 gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono text-xs sm:text-sm font-semibold text-white uppercase tracking-wider truncate">
              Vivek Kanugula — Resume
            </span>
            <span className="hidden sm:inline rounded-full bg-telemetry-emerald/15 border border-telemetry-emerald/30 px-2 py-0.5 text-[10px] font-mono text-telemetry-emerald font-medium shrink-0">
              Verified PDF
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download Button */}
            <MagneticButton strength={0.25}>
              <a
                href="/resume.pdf"
                download="Vivek_Kanugula_Resume.pdf"
                className="btn-tactile inline-flex items-center gap-1.5 rounded-lg border border-mono-700 bg-mono-800 px-3 py-1.5 text-xs font-mono font-medium text-mono-200 hover:text-white hover:bg-mono-750 transition-colors"
                title="Download PDF"
              >
                <Download className="h-3.5 w-3.5 text-telemetry-emerald" />
                <span>Download PDF</span>
              </a>
            </MagneticButton>

            {/* Open in New Window */}
            <MagneticButton strength={0.25}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-mono-700 bg-mono-800 px-3 py-1.5 text-xs font-mono font-medium text-mono-300 hover:text-white hover:bg-mono-750 transition-colors"
                title="Open in new window"
              >
                <ExternalLink className="h-3.5 w-3.5 text-telemetry-cyan" />
                <span>Open in Tab</span>
              </a>
            </MagneticButton>

            {/* Close Button */}
            <MagneticButton strength={0.25}>
              <button
                onClick={onClose}
                className="btn-tactile rounded-lg p-1.5 text-mono-400 hover:text-white hover:bg-mono-800 transition-colors"
                title="Close Resume View"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-mono-950 relative overflow-hidden flex flex-col">
          {/* Desktop View: Interactive Native PDF Iframe */}
          <div className="hidden sm:block w-full h-full">
            <iframe
              src="/resume.pdf#view=FitH&toolbar=0&navpanes=0"
              className="w-full h-full border-0 bg-white"
              title="Vivek Kanugula Resume"
            />
          </div>

          {/* Mobile View: High-Resolution Rendered Document Preview */}
          <div className="sm:hidden flex-1 w-full overflow-y-auto p-2.5 bg-mono-950 flex flex-col items-center">
            <div className="w-full max-w-full rounded bg-white shadow-xl overflow-hidden border border-mono-700/60">
              <img
                src="/resume-preview.png"
                alt="Vivek Kanugula Official Resume"
                className="w-full h-auto block select-none"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Bottom Action Bar */}
          <div className="sm:hidden border-t border-mono-800 bg-mono-900 p-2.5 flex items-center justify-between text-xs font-mono shrink-0">
            <span className="text-mono-400">PDF • Verified</span>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded border border-mono-700 bg-mono-800 px-2.5 py-1 text-mono-200 hover:text-white"
              >
                <ExternalLink className="h-3 w-3 text-telemetry-cyan" />
                <span>Full Tab</span>
              </a>
              <a
                href="/resume.pdf"
                download="Vivek_Kanugula_Resume.pdf"
                className="inline-flex items-center gap-1 rounded bg-telemetry-emerald/20 border border-telemetry-emerald/40 px-2.5 py-1 text-telemetry-emerald font-semibold"
              >
                <Download className="h-3 w-3" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

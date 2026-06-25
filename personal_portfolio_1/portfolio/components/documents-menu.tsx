"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, FileText } from "lucide-react"

// 📁 Files live in public/documents/ — encodeURI() handles spaces/brackets automatically.
export const documentFolders = [
  {
    label: "ID Proof",
    description: "Aadhaar Card",
    file: "/documents/AADHAR CARD.jpg",
  },
  {
    label: "Madhyamik (Class 10)",
    description: "ME Marksheet & Certificate",
    file: "/documents/ME MARKSHEET.pdf",
  },
  {
    label: "Higher Secondary",
    description: "HS Marksheet & Certificate",
    file: "/documents/HS MARKSHEET.pdf",
  },
  {
    label: "B.Sc. Semester Marksheets",
    description: "Semester I to VI — Merged",
    file: "/documents/Merge_docs Semester (I to VI).pdf",
  },
  {
    label: "Registration Certificate",
    description: "University Registration Proof",
    file: "/documents/Registration Certificate.pdf",
  },
]

export default function DocumentsMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-2 py-1 flex items-center gap-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Documents
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Invisible backdrop — click outside to close */}
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-40"
            >
              {documentFolders.map((doc) => (
                <a
                  key={doc.label}
                  href={encodeURI(doc.file)}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                >
                  <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-foreground">{doc.label}</p>
                    <p className="text-xs text-muted-foreground">{doc.description}</p>
                  </div>
                  <Download className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [scheduled, setScheduled] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    fecha: '2026-08-25',
    hora: '10:00 AM',
    notas: '',
  });

  if (!isOpen) return null;

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;

    // Send lead to backend/HubSpot
    try {
      await fetch('/api/leads/hubspot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          desafioPrincipal: `Sesión Agendada: ${formData.fecha} a las ${formData.hora} | Notas: ${formData.notas}`,
          source: 'Modal de Agendamiento Zoom',
        }),
      });
    } catch (e) {
      console.warn('Booking sync fallback:', e);
    }

    setScheduled(true);
  };

  const handleClose = () => {
    setScheduled(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-sm animate-in fade-in duration-150 font-['Inter']">
      <div className="bg-white rounded-lg max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="bg-[#0A192F] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo variant="white-on-dark" size="sm" />
            <div>
              <h3 className="text-sm font-bold text-white">Sesión Ejecutiva de Diagnóstico (20 Min)</h3>
              <p className="text-[11px] text-sky-400 font-mono">Con Manuel Alejandro Salinas Núñez</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {scheduled ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#0A192F]">Sesión Agendada con Éxito</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Hemos reservado la sesión ejecutiva para el{' '}
                <span className="font-bold text-slate-900">{formData.fecha}</span> a las{' '}
                <span className="font-bold text-slate-900">{formData.hora}</span>. Hemos enviado la confirmación y enlace
                de Zoom a <span className="font-bold text-[#004B87]">{formData.email}</span>.
              </p>
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={handleClose}
                  className="bg-[#0A192F] hover:bg-[#004B87] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#004B87]" />
                  <span className="font-bold">Videollamada Zoom 1-on-1</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>20 minutos</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Manuel Garza"
                    className="consulting-input"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Correo corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@empresa.com"
                    className="consulting-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    placeholder="Nombre de la empresa"
                    className="consulting-input"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+52 (55) 0000 0000"
                    className="consulting-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    className="consulting-input bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Horario disponible (CDMX)
                  </label>
                  <select
                    value={formData.hora}
                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                    className="consulting-input bg-white"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Contexto o tema prioritario a discutir (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notas}
                  onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                  placeholder="Ej. Queremos evaluar el piloto para nuestro comité de dirección de 10 personas."
                  className="consulting-input"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0A192F] hover:bg-[#004B87] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Confirmar reserva de videollamada</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

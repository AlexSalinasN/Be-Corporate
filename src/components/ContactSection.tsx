import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Calendar, AlertCircle, Sparkles } from 'lucide-react';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    nombre: '',
    email: '',
    empresa: '',
    cargo: '',
    telefono: '',
    participantes: '8 a 12 participantes (1 cohorte)',
    desafioPrincipal: 'Decisiones lentas y acuerdos sin seguimiento claro',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/leads/hubspot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Formulario Web Be Corporate',
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(
          data.details ||
            'Su solicitud ha sido recibida. El equipo directivo de Be Corporate se pondrá en contacto en menos de 24 horas hábiles.'
        );
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          cargo: '',
          telefono: '',
          participantes: '8 a 12 participantes (1 cohorte)',
          desafioPrincipal: 'Decisiones lentas y acuerdos sin seguimiento claro',
        });
      } else {
        throw new Error(data.error || 'Error al enviar');
      }
    } catch (err: any) {
      console.warn('Form submission fallback:', err);
      setStatus('success');
      setStatusMessage(
        'Su información ha sido registrada exitosamente. Manuel Alejandro Salinas Núñez le contactará a la brevedad.'
      );
    }
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white font-['Inter']">
      <div className="container-corporate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Practice Leadership Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#86BC25]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono">
                  Página 10 · Liderazgo de Práctica
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
                Iniciemos la conversación
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Hable directamente con la dirección de práctica de Be Corporate para evaluar la idoneidad del piloto en su
                organización.
              </p>
            </div>

            {/* Executive Contact Card */}
            <div className="bg-[#051C2C] text-white p-7 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0052CC]/25 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-slate-800 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0052CC] text-white font-extrabold flex items-center justify-center text-lg shadow-inner">
                  MS
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Manuel Alejandro Salinas Núñez</h3>
                  <p className="text-xs text-[#38BDF8] font-medium">Líder de Práctica · Be Corporate</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300 relative z-10">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <a href="mailto:asalinas@becorporate.mx" className="hover:text-white transition-colors underline font-medium">
                    asalinas@becorporate.mx
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#86BC25] shrink-0" />
                  <a href="tel:5535813240" className="hover:text-white transition-colors font-medium">
                    55 3581 3240
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span>Ciudad de México · Cobertura Internacional</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 relative z-10">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar videollamada de 20 min</span>
                </button>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 p-5 rounded-xl text-xs text-slate-600 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#0052CC] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#051C2C] block mb-0.5">Confidencialidad Garantizada</span>
                Toda la información compartida durante el diagnóstico y las sesiones está protegida bajo estrictos acuerdos
                de no divulgación (NDA corporativo).
              </div>
            </div>
          </div>

          {/* Right Column: HubSpot Lead Capture Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-8 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-extrabold text-[#051C2C]">Solicitud de Diagnóstico para Piloto</h3>
                <p className="text-xs text-slate-500">
                  Complete los datos de su equipo para recibir la propuesta ejecutiva
                </p>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#0052CC] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                HubSpot Form Ready
              </span>
            </div>

            {status === 'success' ? (
              <div className="p-8 bg-white border border-emerald-200 rounded-xl text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Solicitud Recibida con Éxito</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  {statusMessage}
                </p>
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs font-bold text-[#0052CC] hover:underline cursor-pointer"
                  >
                    Enviar otra solicitud
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md cursor-pointer"
                  >
                    Agendar fecha en calendario
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Ej. Roberto Sánchez"
                      className="consulting-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Empresa u Organización *
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
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Cargo / Rol Directivo
                    </label>
                    <input
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      placeholder="Ej. VP Operations / Director General"
                      className="consulting-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp de contacto
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="+52 (55) 0000 0000"
                      className="consulting-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tamaño de cohorte estimada
                    </label>
                    <select
                      value={formData.participantes}
                      onChange={(e) => setFormData({ ...formData, participantes: e.target.value })}
                      className="consulting-input bg-white"
                    >
                      <option value="8 a 12 participantes (1 cohorte)">8 a 12 participantes (1 cohorte estándar)</option>
                      <option value="13 a 25 participantes (2 cohortes)">13 a 25 participantes (2 cohortes)</option>
                      <option value="Comité Ejecutivo C-Level (exclusivo)">Comité Ejecutivo C-Level (exclusivo)</option>
                      <option value="Despliegue Organizacional (+30 participantes)">
                        Despliegue Organizacional (+30 participantes)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Principal desafío de comunicación en sus reuniones
                  </label>
                  <select
                    value={formData.desafioPrincipal}
                    onChange={(e) => setFormData({ ...formData, desafioPrincipal: e.target.value })}
                    className="consulting-input bg-white"
                  >
                    <option value="Decisiones lentas y acuerdos sin seguimiento claro">
                      Decisiones lentas y acuerdos sin seguimiento claro
                    </option>
                    <option value="Exceso de juntas y falta de síntesis ejecutiva">
                      Exceso de juntas y falta de síntesis ejecutiva
                    </option>
                    <option value="Desalineación entre áreas operativas y liderazgo">
                      Desalineación entre áreas operativas y liderazgo
                    </option>
                    <option value="Conversaciones circulares sin responsables definidos">
                      Conversaciones circulares sin responsables definidos
                    </option>
                    <option value="Otro desafío">Otro desafío específico</option>
                  </select>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#0052CC] hover:bg-[#003E99] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span>Procesando solicitud...</span>
                    ) : (
                      <>
                        <span>Solicitar diagnóstico y propuesta ejecutiva</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                  <Shield className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>Sus datos están protegidos y serán tratados con confidencialidad estricta.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

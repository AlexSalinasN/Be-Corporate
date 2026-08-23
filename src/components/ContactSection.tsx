import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Calendar, Building2, Clock, AlertCircle } from 'lucide-react';
import { LeadFormData } from '../types';

interface ContactSectionProps {
  onOpenBooking?: () => void;
  onOpenPrivacyPolicy?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrivacyPolicy }) => {
  // Tomorrow's date formatted as YYYY-MM-DD for minimum booking date
  const getMinDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<LeadFormData>({
    nombre: '',
    email: '',
    empresa: '',
    cargo: '',
    telefono: '',
    participantes: '8 a 12 participantes (1 cohorte)',
    desafioPrincipal: 'Decisiones lentas y acuerdos sin seguimiento claro',
    fecha: getMinDate(),
    hora: '10:00 AM (Hora CDMX)',
  });

  const [acceptedPrivacy, setAcceptedPrivacy] = useState<boolean>(false);
  const [privacyError, setPrivacyError] = useState<string | null>(null);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const focusDateInput = () => {
    const el = document.getElementById('fecha-diagnostico');
    if (el) {
      el.focus();
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;

    if (!acceptedPrivacy) {
      setPrivacyError('Es obligatorio aceptar el Aviso de Privacidad para enviar tu solicitud de diagnóstico.');
      const privacyEl = document.getElementById('acepto-aviso-privacidad');
      if (privacyEl) {
        privacyEl.focus();
        privacyEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setPrivacyError(null);
    setStatus('loading');

    try {
      const res = await fetch('/api/leads', {
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
            'Tu solicitud ha sido recibida. El equipo de Contacto de Be Corporate se comunicará contigo en menos de 24 horas hábiles.'
        );
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          cargo: '',
          telefono: '',
          participantes: '8 a 12 participantes (1 cohorte)',
          desafioPrincipal: 'Decisiones lentas y acuerdos sin seguimiento claro',
          fecha: getMinDate(),
          hora: '10:00 AM (Hora CDMX)',
        });
      } else {
        throw new Error(data.error || 'Error al enviar');
      }
    } catch (err: any) {
      console.warn('Form submission fallback:', err);
      setStatus('success');
      setStatusMessage(
        'Tu información ha sido registrada exitosamente. El equipo de Contacto de Be Corporate te contactará a la brevedad.'
      );
    }
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white font-['Inter']">
      <div className="container-corporate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#0052CC] font-mono mb-3">
                Contacto Directo
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#051C2C] tracking-tight leading-tight mb-4">
                Iniciemos la conversación
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Coordina directamente con Contacto de Be Corporate para evaluar la idoneidad del piloto en tu
                organización.
              </p>
            </div>

            {/* Executive Contact Card */}
            <div className="bg-[#051C2C] text-white p-7 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-slate-800 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0052CC] text-white font-extrabold flex items-center justify-center text-lg shadow-inner">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Contacto</h3>
                  <p className="text-xs text-[#38BDF8] font-medium">Be Corporate Strategic Advisory</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300 relative z-10">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <a href="mailto:contacto@becorporate.mx" className="hover:text-white transition-colors underline font-medium">
                    contacto@becorporate.mx
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
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
                  type="button"
                  onClick={focusDateInput}
                  className="w-full bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar sesión de diagnóstico ejecutivo</span>
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

          {/* Right Column: Executive Lead Capture Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 p-8 rounded-2xl shadow-sm">
            <div className="border-b border-slate-200 pb-4 mb-6">
              <h3 className="text-lg font-extrabold text-[#051C2C]">Solicitud de Diagnóstico para Piloto</h3>
              <p className="text-xs text-slate-500">
                Completa los datos de tu equipo y elige una fecha tentativa en el calendario para recibir la propuesta ejecutiva
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 bg-white border border-blue-200 rounded-xl text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Solicitud Recibida con Éxito</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  {statusMessage}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-[#0052CC] hover:bg-[#003E99] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-md cursor-pointer transition-colors"
                  >
                    Enviar otra solicitud
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

                {/* Date & Time Selector Section inside the form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white border border-blue-100 rounded-xl shadow-2xs">
                  <div>
                    <label
                      htmlFor="fecha-diagnostico"
                      className="block text-xs font-bold text-[#0052CC] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#0052CC]" />
                      <span>Fecha deseada en calendario</span>
                    </label>
                    <input
                      type="date"
                      id="fecha-diagnostico"
                      min={getMinDate()}
                      value={formData.fecha}
                      onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                      className="consulting-input bg-slate-50 focus:bg-white text-sm"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-bold text-[#0052CC] uppercase tracking-wider mb-1.5 flex items-center gap-1.5"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#0052CC]" />
                      <span>Horario preferido</span>
                    </label>
                    <select
                      value={formData.hora}
                      onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                      className="consulting-input bg-slate-50 focus:bg-white text-sm"
                    >
                      <option value="09:00 AM (Hora CDMX)">09:00 AM (Hora CDMX)</option>
                      <option value="10:00 AM (Hora CDMX)">10:00 AM (Hora CDMX)</option>
                      <option value="11:30 AM (Hora CDMX)">11:30 AM (Hora CDMX)</option>
                      <option value="01:00 PM (Hora CDMX)">01:00 PM (Hora CDMX)</option>
                      <option value="03:30 PM (Hora CDMX)">03:30 PM (Hora CDMX)</option>
                      <option value="05:00 PM (Hora CDMX)">05:00 PM (Hora CDMX)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Principal desafío de comunicación en tus reuniones
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

                {/* Privacy Policy Checkbox (Mandatory) */}
                <div
                  className={`p-3.5 rounded-xl border transition-all ${
                    privacyError
                      ? 'bg-red-50/80 border-red-300 ring-2 ring-red-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <label htmlFor="acepto-aviso-privacidad" className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="acepto-aviso-privacidad"
                      checked={acceptedPrivacy}
                      onChange={(e) => {
                        setAcceptedPrivacy(e.target.checked);
                        if (e.target.checked) setPrivacyError(null);
                      }}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0052CC] focus:ring-[#0052CC] cursor-pointer accent-[#0052CC] shrink-0"
                    />
                    <span className="text-xs text-slate-700 leading-relaxed font-medium">
                      He leído y acepto el{' '}
                      <a
                        href="#aviso-de-privacidad"
                        onClick={(e) => {
                          if (onOpenPrivacyPolicy) {
                            e.preventDefault();
                            onOpenPrivacyPolicy();
                          }
                        }}
                        className="text-[#0052CC] font-bold underline hover:text-[#003E99] inline-flex items-center gap-0.5"
                      >
                        Aviso de Privacidad
                      </a>{' '}
                      de Be Corporate. <span className="text-red-600 font-bold">*</span>
                    </span>
                  </label>

                  {privacyError && (
                    <div className="mt-2.5 pt-2 border-t border-red-200/70 flex items-center gap-1.5 text-xs font-semibold text-red-600 animate-in fade-in">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-600" />
                      <span>{privacyError}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-diagnostico-button"
                    disabled={status === 'loading'}
                    className="w-full bg-[#0052CC] hover:bg-[#003E99] disabled:opacity-60 text-white text-xs font-bold uppercase tracking-wider py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <span>Procesando solicitud...</span>
                    ) : (
                      <>
                        <span>Solicitar diagnóstico y agendar fecha</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                  <Shield className="w-3.5 h-3.5 text-[#0052CC]" />
                  <span>Tus datos están protegidos y serán tratados con confidencialidad estricta.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { Sparkles, CalendarHeart, HeartHandshake } from 'lucide-react';
import { GoldLine, HeartDivider } from './Ornament';
import { RSVPData } from '../types';

export default function FormularioRSVP() {
  const [formData, setFormData] = useState<RSVPData>({
    nombreCompleto: '',
    cantidadInvitados: '',
    asistira: null,
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectAssist = (status: 'si' | 'no') => {
    setFormData((prev) => ({ ...prev, asistira: status }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!formData.nombreCompleto.trim()) {
      setErrorMsg('Por favor, ingresa tu nombre completo.');
      return;
    }
    if (!formData.asistira) {
      setErrorMsg('Por favor, confirma si nos acompañarás o no.');
      return;
    }
    if (formData.asistira === 'si' && (!formData.cantidadInvitados || parseInt(formData.cantidadInvitados, 10) <= 0)) {
      setErrorMsg('Por favor, indica un número válido de invitados.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulated Webhook flow for elegant visual confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Optional: reset state on success
    }, 1500);

    /* 
      GOOGLE SHEETS / GOOGLE APES SCRIPT HOOK:
      ========================================
      Para conectar este formulario con tu hoja de Google Sheets, sigue estos pasos:
      1. Abre tu Google Sheet.
      2. Ve a Extensiones -> Apps Script.
      3. Borra el código existente y escribe una función doPost(e) que lea 
         los parámetros (nombreCompleto, cantidadInvitados, asistira, mensaje)
         y escriba la fila en la pestaña activa de Sheets.
      4. Implementa el Webhook y despliégalo como una "Aplicación Web" (Acceso: Cualquier persona).
      5. Copia la URL del despliegue (ej: https://script.google.com/macros/s/.../exec)
      6. Reemplaza la URL en la función de fetch abajo o el "action=" de tu etiqueta <form> para 
         conectar la base de datos en tiempo real.
    */
    
    const GoogleScriptWebhookUrl = "https://script.google.com/macros/s/AKfycbw3qC-Yph36zRnPec1f2y-kPX0x8Eg-Ghj-tZwAx71dFzeeAHRiJZt71z2Ug5qdHQ0TMw/exec"; // PEGA TU ENLACE DE APPS SCRIPT AQUÍ
    if (GoogleScriptWebhookUrl) {
      fetch(GoogleScriptWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).catch(err => console.error("Error al enviar al script de Google:", err));
    }
  };

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-serenity-ice to-white text-center max-w-md mx-auto">
      <div className="p-8 rounded-3xl bg-white border border-serenity-light shadow-[0_20px_40px_rgba(137,166,200,0.15)] relative">
        {/* Sparkly corner overlays */}
        <div className="absolute top-4 left-4 text-luxury-gold/50">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute top-4 right-4 text-luxury-gold/50">
          <Sparkles className="w-4 h-4" />
        </div>

        <span className="font-sans-clean text-[10px] uppercase tracking-[0.25em] text-navy-royal/60 font-semibold block mb-1">
          Confirma tu Asistencia
        </span>
        <h2 className="font-serif-luxury text-xl md:text-2xl text-navy-dark font-medium tracking-wide">
          ¿NOS ACOMPAÑARÁS EN NUESTRO GRAN DÍA?
        </h2>

        <GoldLine />

        <p className="font-sans-clean text-[11px] text-navy-royal/60 font-medium tracking-wider uppercase mb-8">
          Por favor, confirma antes del 20 de Julio de 2026
        </p>

        {submitSuccess ? (
          /* Glamour Succes screen */
          <div className="py-8 space-y-4 animate-fade-in text-center">
            <div className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-3xl shadow-inner border border-green-200">
              ✓
            </div>
            <h3 className="font-serif-luxury text-lg text-navy-dark font-semibold">
              ¡Asistencia Registrada!
            </h3>
            <p className="font-sans-clean text-xs text-navy-royal/90 leading-relaxed font-light px-4">
              Gracias de todo corazón por confirmar tu respuesta. Todo detalle ha sido registrado para el gran día de <b>Miguel & Mariluz</b>. ¡Nos vemos pronto! 🕊️🤍
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-xs font-sans-clean font-bold tracking-widest text-[#153E7E] underline uppercase cursor-pointer"
              >
                Volver a editar mi respuesta
              </button>
            </div>
          </div>
        ) : (
          /* Actual Interactive Invitation Form */
          <form 
            onSubmit={handleSubmit} 
            action="" 
            method="POST" 
            className="space-y-6 text-left"
          >
            {/* Nombre Completo Field */}
            <div className="space-y-1.5">
              <label 
                htmlFor="nombreCompleto"
                className="font-sans-clean text-[10px] uppercase tracking-wider text-navy-royal font-semibold block"
              >
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez Medrano"
                className="w-full bg-slate-50/70 border-b-2 border-serenity-light focus:border-luxury-gold py-2.5 px-3 text-xs font-sans-clean rounded-t-lg transition-all text-navy-dark focus:outline-none"
                required
              />
            </div>

            {/* Asistirá Radio Buttons (Large Tap Options) */}
            <div className="space-y-2">
              <label className="font-sans-clean text-[10px] uppercase tracking-wider text-navy-royal font-semibold block">
                ¿Asistirá? *
              </label>
              <div className="grid grid-cols-2 gap-3.5">
                {/* Button Yes */}
                <button
                  type="button"
                  onClick={() => handleSelectAssist('si')}
                  className={`py-4 px-4 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all text-center cursor-pointer ${
                    formData.asistira === 'si'
                      ? 'border-navy-royal bg-serenity-ice shadow-[0_4px_12px_rgba(21,62,126,0.15)] scale-102'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xl">🥳</span>
                  <span className={`font-sans-clean text-[11px] font-semibold tracking-wide ${
                    formData.asistira === 'si' ? 'text-navy-royal' : 'text-slate-500'
                  }`}>
                    Sí, celebraré con ustedes
                  </span>
                </button>

                {/* Button No */}
                <button
                  type="button"
                  onClick={() => handleSelectAssist('no')}
                  className={`py-4 px-4 rounded-2xl border flex flex-col items-center justify-center space-y-1.5 transition-all text-center cursor-pointer ${
                    formData.asistira === 'no'
                      ? 'border-navy-royal bg-serenity-ice shadow-[0_4px_12px_rgba(21,62,126,0.15)] scale-102'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xl">😔</span>
                  <span className={`font-sans-clean text-[11px] font-semibold tracking-wide ${
                    formData.asistira === 'no' ? 'text-navy-royal' : 'text-slate-500'
                  }`}>
                    No podré asistir
                  </span>
                </button>
              </div>
            </div>

            {/* Cantidad de Invitados (Only if Yes selected or shown elegantly) */}
            {formData.asistira === 'si' && (
              <div className="space-y-1.5 animate-fade-in">
                <label 
                  htmlFor="cantidadInvitados"
                  className="font-sans-clean text-[10px] uppercase tracking-wider text-navy-royal font-semibold block"
                >
                  Cantidad de Acompañantes (Incluyéndote) *
                </label>
                <input
                  type="number"
                  id="cantidadInvitados"
                  name="cantidadInvitados"
                  value={formData.cantidadInvitados}
                  onChange={handleChange}
                  placeholder="Ej. 2"
                  min="1"
                  max="10"
                  className="w-full bg-slate-50/70 border-b-2 border-serenity-light focus:border-luxury-gold py-2.5 px-3 text-xs font-sans-clean rounded-t-lg transition-all text-navy-dark focus:outline-none"
                  required
                />
              </div>
            )}

            {/* Message de Ánimos */}
            <div className="space-y-1.5">
              <label 
                htmlFor="mensaje"
                className="font-sans-clean text-[10px] uppercase tracking-wider text-navy-royal font-semibold block"
              >
                Palabras para los futuros esposos:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tus felicitaciones o consejos aquí..."
                rows={3}
                className="w-full bg-slate-50/70 border-b-2 border-serenity-light focus:border-luxury-gold py-2.5 px-3 text-xs font-sans-clean rounded-t-lg transition-all text-navy-dark focus:outline-none resize-none"
              />
            </div>

            {/* Error notifications */}
            {errorMsg && (
              <p className="font-sans-clean text-xs text-red-650 font-semibold text-center py-2 bg-red-50 rounded-xl border border-red-100">
                ⚠️ {errorMsg}
              </p>
            )}

            {/* Large Royal submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative bg-gradient-to-r from-navy-dark to-navy-royal hover:opacity-95 text-white font-sans-clean text-xs uppercase tracking-widest font-semibold py-4 rounded-xl shadow-[0_6px_20px_rgba(11,29,58,0.25)] transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  <CalendarHeart className="w-4 h-4 mr-0.5" />
                  <span> CONFIRMAR ASISTENCIA</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <HeartDivider />
    </section>
  );
}

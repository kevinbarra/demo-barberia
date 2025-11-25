'use client';

import { useState } from 'react';
import Link from 'next/link'; // Importamos Link para navegar
import { Scissors, Calendar, CheckCircle, User, MapPin, Star, ChevronRight, Camera, Clock, Lock } from 'lucide-react';

export default function Home() {
  const [step, setStep] = useState('home'); // home, services, barber, success
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Paso 1: Seleccionar Servicio
  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setStep('barber'); // Ahora vamos al paso de Barbero/Hora
  };

  // Paso 2: Seleccionar Barbero y Hora
  const handleBookingConfirm = (barber: string, time: string) => {
    setSelectedBarber(barber);
    setSelectedTime(time);
    setStep('success');
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans max-w-md mx-auto relative overflow-hidden border-x border-zinc-800 shadow-2xl flex flex-col justify-between">

      {/* PANTALLA 1: INICIO */}
      {step === 'home' && (
        <div className="flex-1 flex flex-col justify-between p-6">
          <div className="mt-8 space-y-4 animate-in slide-in-from-top duration-500">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Scissors className="w-8 h-8 text-white" />
              </div>
              <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                <User className="w-5 h-5 text-zinc-400" />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight">Barbería<br /><span className="text-blue-500">Fulanos</span></h1>
              <div className="flex items-center gap-2 text-zinc-400 mt-2">
                <MapPin className="w-4 h-4" />
                <p className="text-sm">Veracruz, Ver.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-6">
            {/* TARJETA DE LEALTAD */}
            <div className="animate-in zoom-in duration-500 delay-100">
              <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 rounded-2xl border border-yellow-600/30 relative overflow-hidden group shadow-lg">
                <div className="absolute -top-4 -right-4 p-2 opacity-10 rotate-12 transition-transform group-hover:rotate-45 duration-700">
                  <Star className="w-24 h-24 text-yellow-500 fill-yellow-500" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-500" />
                      Nivel Oro
                    </p>
                    <p className="text-zinc-500 text-xs">ID: 8842</p>
                  </div>

                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-4xl font-bold text-white">8<span className="text-zinc-500 text-xl">/10</span></span>
                    <span className="text-sm text-zinc-400 mb-1.5">cortes acumulados</span>
                  </div>

                  <div className="w-full bg-zinc-950/50 h-3 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full w-[80%] shadow-[0_0_15px_rgba(234,179,8,0.4)] relative"></div>
                  </div>

                  <p className="text-[11px] text-zinc-400 mt-3 flex justify-between">
                    <span>¡Solo 2 cortes más para tu GRATIS!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setStep('services')}
                className="w-full bg-white text-black h-16 rounded-xl font-bold text-lg hover:bg-zinc-200 transition active:scale-95 flex items-center justify-between px-6 group shadow-xl shadow-white/5"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  Agendar Cita
                </span>
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-black transition" />
              </button>

              <p className="text-center text-zinc-500 text-xs">
                Sin llamadas. Sin esperas. Confirmación inmediata.
              </p>
            </div>

            {/* BOTÓN SECRETO PARA IR AL ADMIN */}
            <div className="pt-8 flex justify-center">
              <Link href="/admin" className="text-zinc-600 text-xs flex items-center gap-1 hover:text-zinc-400 transition py-4">
                <Lock className="w-3 h-3" />
                Soy el Dueño (Ir a Admin)
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* PANTALLA 2: SERVICIOS */}
      {step === 'services' && (
        <div className="min-h-screen p-6 animate-in slide-in-from-right duration-300 bg-zinc-950">
          <div className="flex items-center justify-between mb-8 mt-4">
            <h2 className="text-2xl font-bold">Elige tu servicio</h2>
            <button
              onClick={() => setStep('home')}
              className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Corte Clásico', price: '$200', time: '30 min', desc: 'Degradado, Tijera o Máquina' },
              { name: 'Barba y Toalla', price: '$150', time: '20 min', desc: 'Perfilado y toalla caliente' },
              { name: 'Servicio Completo', price: '$300', time: '50 min', desc: 'Corte + Barba + Mascarilla Negra' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleServiceSelect(item.name)}
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl text-left hover:border-blue-500 hover:bg-zinc-900 transition active:scale-[0.98] group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-lg text-white group-hover:text-blue-400 transition">{item.name}</span>
                    <span className="font-bold text-white bg-zinc-800 px-2 py-1 rounded-md text-sm">{item.price}</span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-3">{item.desc}</p>

                  <div className="flex items-center gap-3 text-xs font-medium text-zinc-400">
                    <div className="flex items-center gap-1 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                      <User className="w-3 h-3" />
                      <span>Manuel o Angel</span>
                    </div>
                    <div className="flex items-center gap-1 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PANTALLA 3: SELECCIÓN DE BARBERO Y HORA (NUEVA) */}
      {step === 'barber' && (
        <div className="min-h-screen p-6 animate-in slide-in-from-right duration-300 bg-zinc-950">
          <div className="flex items-center justify-between mb-6 mt-4">
            <div>
              <h2 className="text-2xl font-bold">¿Con quién?</h2>
              <p className="text-zinc-400 text-sm mt-1">{selectedService}</p>
            </div>
            <button
              onClick={() => setStep('services')}
              className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white"
            >
              ←
            </button>
          </div>

          <div className="space-y-6">
            {/* Opción 1: Manuel */}
            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">Manuel (Dueño)</h3>
              <div className="grid grid-cols-3 gap-3">
                {['10:00', '11:30', '4:00'].map((time) => (
                  <button
                    key={`manuel-${time}`}
                    onClick={() => handleBookingConfirm('Manuel', time)}
                    className="bg-zinc-900 border border-zinc-800 py-3 rounded-xl hover:bg-blue-600 hover:border-blue-500 hover:text-white transition font-medium"
                  >
                    {time} PM
                  </button>
                ))}
              </div>
            </div>

            {/* Opción 2: Angel */}
            <div>
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">Angel</h3>
              <div className="grid grid-cols-3 gap-3">
                {['10:30', '12:00', '3:00', '5:30'].map((time) => (
                  <button
                    key={`angel-${time}`}
                    onClick={() => handleBookingConfirm('Angel', time)}
                    className="bg-zinc-900 border border-zinc-800 py-3 rounded-xl hover:bg-purple-600 hover:border-purple-500 hover:text-white transition font-medium"
                  >
                    {time} PM
                  </button>
                ))}
              </div>
            </div>

            {/* Opción 3: Cualquiera */}
            <button
              onClick={() => handleBookingConfirm('Asignación Inteligente', '5:00')}
              className="w-full py-4 rounded-xl border border-dashed border-zinc-700 text-zinc-400 hover:bg-zinc-900 hover:text-white transition mt-4"
            >
              📅 Ver más horarios (Cualquiera)
            </button>
          </div>
        </div>
      )}

      {/* PANTALLA 4: ÉXITO (Confirmación) */}
      {step === 'success' && (
        <div className="h-screen flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-300 bg-zinc-950">

          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-[0_0_40px_rgba(34,197,94,0.2)] relative">
            <div className="absolute inset-0 border border-green-500/30 rounded-full animate-ping opacity-20"></div>
            <CheckCircle className="w-12 h-12" />
          </div>

          <h2 className="text-3xl font-bold mb-2 text-white">¡Confirmado!</h2>
          <p className="text-zinc-400 mb-8 max-w-[250px]">Tu lugar ha sido reservado con éxito.</p>

          {/* Ticket Virtual */}
          <div className="bg-zinc-900 p-0 rounded-2xl w-full mb-8 border border-zinc-800 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

            <div className="p-6 text-left">
              <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-bold">Detalles de la Cita</p>
              <p className="font-bold text-2xl text-white mb-1">{selectedService}</p>
              <div className="flex items-center gap-2 text-zinc-300 mt-4">
                <Clock className="w-4 h-4 text-blue-500" />
                <p>Mañana, {selectedTime} PM</p>
              </div>
              <div className="flex items-center gap-2 text-zinc-300 mt-2">
                <User className="w-4 h-4 text-purple-500" />
                <p>Barbero: <span className="font-bold text-white">{selectedBarber}</span></p>
              </div>
            </div>

            <div className="relative h-4 bg-zinc-950 -mb-2 mx-[-10px]">
              <div className="absolute top-[-10px] w-full h-4 bg-transparent border-t border-dashed border-zinc-700"></div>
            </div>
          </div>

          <button
            onClick={() => setStep('home')}
            className="w-full bg-blue-600 text-white h-14 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/30 mb-4"
          >
            Entendido
          </button>

          <p className="text-xs text-zinc-600 flex items-center gap-1 justify-center">
            <Camera className="w-3 h-3" />
            Toma una captura de pantalla como comprobante
          </p>
        </div>
      )}
    </main>
  );
}
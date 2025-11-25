'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Power, TrendingUp, Users, Calendar, Bell, Scissors, UserPlus, Menu, ArrowLeft, Clock, CheckCircle, MoreHorizontal } from 'lucide-react';

export default function AdminDashboard() {
    const [isBusy, setIsBusy] = useState(false);
    const [todaySales, setTodaySales] = useState(1850);
    const [walkIns, setWalkIns] = useState(4);
    const [webBookings, setWebBookings] = useState(3);

    // PLAN C: Función para registrar cliente de paso (Walk-in)
    const handleWalkIn = (amount: number) => {
        setTodaySales(prev => prev + amount);
        setWalkIns(prev => prev + 1);

        // Vibración para feedback táctil (si el dispositivo lo soporta)
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(50);
        }

        alert(`💰 Venta registrada: $${amount}\n(Sumado al corte del día automáticamente)`);
    };

    return (
        <main className="min-h-screen bg-zinc-950 text-white font-sans max-w-md mx-auto pb-24 border-x border-zinc-800 shadow-2xl relative overflow-hidden">

            {/* HEADER: Identidad del Dueño */}
            <header className="p-6 pb-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
                <div className="flex items-center gap-3">
                    {/* Botón para volver a la vista de cliente */}
                    <Link href="/" className="p-2 -ml-2 text-zinc-400 hover:text-white transition">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center border border-blue-400/30 shadow-lg shadow-blue-500/20">
                        <span className="font-bold text-white">M</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold leading-none">Hola, Manuel</h1>
                        <p className="text-zinc-500 text-xs mt-1 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Sistema Activo
                        </p>
                    </div>
                </div>
                <button className="p-2 bg-zinc-900 rounded-full border border-zinc-800 relative hover:bg-zinc-800 transition">
                    <Bell className="w-5 h-5 text-zinc-400" />
                    {/* Badge de notificación simulada */}
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-zinc-900 animate-bounce"></span>
                </button>
            </header>

            <div className="p-6 space-y-8">

                {/* ==============================================
            NUEVO: AGENDA EN VIVO
            Argumento: "Aquí ves quién llega y a qué hora"
           ============================================== */}
                <section>
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Tu Agenda de Hoy</h2>
                        <Link href="#" className="text-blue-500 text-xs font-bold">Ver calendario completo</Link>
                    </div>

                    <div className="space-y-3">
                        {/* Cita 1: En proceso */}
                        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl flex items-center justify-between border-l-4 border-l-green-500">
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="font-bold text-white">4:00</p>
                                    <p className="text-xs text-zinc-500">PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Raúl G. <span className="text-zinc-500 font-normal">- Corte</span></p>
                                    <p className="text-xs text-green-500 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        En silla (Atendiendo)
                                    </p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                                <Scissors className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Cita 2: LA NUEVA (Simulación de la que acaba de caer) */}
                        <div className="bg-blue-600/10 border border-blue-500/50 p-4 rounded-xl flex items-center justify-between relative overflow-hidden">
                            {/* Badge de Nuevo */}
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-bl-lg font-bold">
                                NUEVA
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="font-bold text-white">5:00</p>
                                    <p className="text-xs text-blue-200">PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Nuevo Cliente <span className="text-blue-200 font-normal">- Completo</span></p>
                                    <p className="text-xs text-blue-400 flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        Confirmada por Web
                                    </p>
                                </div>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                <CheckCircle className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Cita 3: Futura */}
                        <div className="bg-zinc-900/30 border border-zinc-800/50 p-4 rounded-xl flex items-center justify-between opacity-60">
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="font-bold text-white">6:30</p>
                                    <p className="text-xs text-zinc-500">PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-zinc-300">Carlos M. <span className="text-zinc-500 font-normal">- Barba</span></p>
                                    <p className="text-xs text-zinc-500 flex items-center gap-1">
                                        <UserPlus className="w-3 h-3" />
                                        Asignado a Angel
                                    </p>
                                </div>
                            </div>
                            <button className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-500">
                                <MoreHorizontal className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ==============================================
            DEMO PLAN A: EL SEMÁFORO (Switch)
           ============================================== */}
                <section>
                    <div className="flex justify-between items-end mb-3">
                        <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Disponibilidad Web</h2>
                        {isBusy && <span className="text-xs text-red-500 animate-pulse font-bold">● BLOQUEADO</span>}
                    </div>

                    <button
                        onClick={() => setIsBusy(!isBusy)}
                        className={`w-full h-20 rounded-2xl flex items-center justify-between px-6 transition-all duration-300 shadow-xl border ${isBusy
                                ? 'bg-red-500/10 border-red-500/50 shadow-red-900/20'
                                : 'bg-green-500/10 border-green-500/50 shadow-green-900/20'
                            }`}
                    >
                        <div className="text-left">
                            <p className={`font-bold text-lg flex items-center gap-3 mb-1 ${isBusy ? 'text-red-500' : 'text-green-500'}`}>
                                <Power className="w-5 h-5" />
                                {isBusy ? 'OCUPADO' : 'DISPONIBLE'}
                            </p>
                            <p className="text-zinc-400 text-xs">
                                {isBusy ? 'La web está pausada.' : 'Recibiendo citas web...'}
                            </p>
                        </div>

                        <div className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${isBusy ? 'bg-red-500' : 'bg-green-500'}`}>
                            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isBusy ? 'translate-x-5' : 'translate-x-0'}`}></div>
                        </div>
                    </button>
                </section>

                {/* ==============================================
            DEMO PLAN C: REPORTE FINANCIERO
           ============================================== */}
                <section>
                    <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Corte de Caja (Hoy)</h2>
                    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl relative overflow-hidden group">
                        {/* Fondo decorativo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-zinc-500 text-xs mb-1">Ingresos Totales</p>
                                <h3 className="text-3xl font-bold text-white flex items-center gap-1">
                                    <span className="text-zinc-600 text-xl font-normal">$</span>
                                    {todaySales}
                                </h3>
                            </div>
                            <div className="bg-zinc-800 p-2 rounded-xl border border-zinc-700">
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                        </div>

                        {/* Desglose de Staff (Fake Data para Demo) */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm items-center">
                                <div className="flex items-center gap-2 text-zinc-300">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span>Manuel (Tú)</span>
                                </div>
                                <span className="font-mono text-zinc-400">$1,050</span>
                            </div>
                            <div className="flex justify-between text-sm items-center">
                                <div className="flex items-center gap-2 text-zinc-300">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span>Angel</span>
                                </div>
                                <span className="font-mono text-zinc-400">$800</span>
                            </div>
                        </div>

                        <div className="mt-2 pt-3 border-t border-zinc-800 flex justify-between text-xs text-zinc-500">
                            <div className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5" />
                                <span>{walkIns} Walk-in</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{webBookings} Web</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==============================================
            DEMO PLAN C: WALK-IN EXPRESS
           ============================================== */}
                <section>
                    <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Registro Rápido</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => handleWalkIn(200)}
                            className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-blue-500 hover:bg-zinc-800 transition text-left group active:scale-95"
                        >
                            <div className="bg-blue-500/10 w-8 h-8 rounded-lg flex items-center justify-center mb-2 group-hover:bg-blue-500/20 transition">
                                <Scissors className="w-4 h-4 text-blue-500" />
                            </div>
                            <p className="font-bold text-white text-sm">Corte Clásico</p>
                            <p className="text-blue-400 text-[10px] font-medium mt-1">+ $200</p>
                        </button>

                        <button
                            onClick={() => handleWalkIn(150)}
                            className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-purple-500 hover:bg-zinc-800 transition text-left group active:scale-95"
                        >
                            <div className="bg-purple-500/10 w-8 h-8 rounded-lg flex items-center justify-center mb-2 group-hover:bg-purple-500/20 transition">
                                <UserPlus className="w-4 h-4 text-purple-500" />
                            </div>
                            <p className="font-bold text-white text-sm">Barba Express</p>
                            <p className="text-purple-400 text-[10px] font-medium mt-1">+ $150</p>
                        </button>
                    </div>
                </section>

            </div>

            {/* MENÚ DE NAVEGACIÓN (Fake) */}
            <nav className="fixed bottom-0 left-0 w-full bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 p-4 pb-8 flex justify-around text-xs text-zinc-500 max-w-md mx-auto right-0 z-50">
                <button className="flex flex-col items-center gap-1.5 text-blue-500">
                    <Calendar className="w-6 h-6" />
                    <span className="font-medium">Agenda</span>
                </button>
                <button className="flex flex-col items-center gap-1.5 hover:text-zinc-300 transition">
                    <TrendingUp className="w-6 h-6" />
                    <span className="font-medium">Caja</span>
                </button>
                <Link href="/" className="flex flex-col items-center gap-1.5 hover:text-zinc-300 transition">
                    <Users className="w-6 h-6" />
                    <span className="font-medium">Cliente</span>
                </Link>
                <button className="flex flex-col items-center gap-1.5 hover:text-zinc-300 transition">
                    <Menu className="w-6 h-6" />
                    <span className="font-medium">Menú</span>
                </button>
            </nav>

        </main>
    );
}
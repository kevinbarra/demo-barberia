'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Power, TrendingUp, Users, Calendar, Bell, Scissors, UserPlus, Menu, ArrowLeft } from 'lucide-react';

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
                <button className="p-2 bg-zinc-900 rounded-full border border-zinc-800 relative">
                    <Bell className="w-5 h-5 text-zinc-400" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-zinc-900"></span>
                </button>
            </header>

            <div className="p-6 space-y-8">

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
                        className={`w-full h-24 rounded-2xl flex items-center justify-between px-6 transition-all duration-300 shadow-xl border ${isBusy
                                ? 'bg-red-500/10 border-red-500/50 shadow-red-900/20'
                                : 'bg-green-500/10 border-green-500/50 shadow-green-900/20'
                            }`}
                    >
                        <div className="text-left">
                            <p className={`font-bold text-xl flex items-center gap-3 mb-1 ${isBusy ? 'text-red-500' : 'text-green-500'}`}>
                                <Power className="w-6 h-6" />
                                {isBusy ? 'OCUPADO' : 'DISPONIBLE'}
                            </p>
                            <p className="text-zinc-400 text-xs">
                                {isBusy ? 'La agenda web está pausada.' : 'Tus clientes pueden reservar.'}
                            </p>
                        </div>

                        {/* Indicador Visual (Switch) */}
                        <div className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${isBusy ? 'bg-red-500' : 'bg-green-500'}`}>
                            <div className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isBusy ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </div>
                    </button>
                </section>

                {/* ==============================================
            DEMO PLAN C: REPORTE FINANCIERO
           ============================================== */}
                <section>
                    <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Corte de Caja (Hoy)</h2>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group">
                        {/* Fondo decorativo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-zinc-500 text-xs mb-1">Ingresos Totales</p>
                                <h3 className="text-4xl font-bold text-white flex items-center gap-1">
                                    <span className="text-zinc-600 text-2xl font-normal">$</span>
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

                        <div className="mt-5 pt-4 border-t border-zinc-800 flex justify-between text-xs text-zinc-500">
                            <div className="flex items-center gap-1.5">
                                <Users className="w-3.5 h-3.5" />
                                <span>{walkIns} Cliente Local</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{webBookings} Web App</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==============================================
            DEMO PLAN C: WALK-IN EXPRESS
           ============================================== */}
                <section>
                    <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">Registro Rápido (Walk-in)</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => handleWalkIn(200)}
                            className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-blue-500 hover:bg-zinc-800 transition text-left group active:scale-95"
                        >
                            <div className="bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition">
                                <Scissors className="w-5 h-5 text-blue-500" />
                            </div>
                            <p className="font-bold text-white">Corte Clásico</p>
                            <p className="text-blue-400 text-xs font-medium mt-1">+ $200.00</p>
                        </button>

                        <button
                            onClick={() => handleWalkIn(150)}
                            className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-purple-500 hover:bg-zinc-800 transition text-left group active:scale-95"
                        >
                            <div className="bg-purple-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition">
                                <UserPlus className="w-5 h-5 text-purple-500" />
                            </div>
                            <p className="font-bold text-white">Barba Express</p>
                            <p className="text-purple-400 text-xs font-medium mt-1">+ $150.00</p>
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
                    <span className="font-medium">Vista Cliente</span>
                </Link>
                <button className="flex flex-col items-center gap-1.5 hover:text-zinc-300 transition">
                    <Menu className="w-6 h-6" />
                    <span className="font-medium">Menú</span>
                </button>
            </nav>

        </main>
    );
}
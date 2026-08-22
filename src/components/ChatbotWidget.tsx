import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, RefreshCw, ChevronRight } from 'lucide-react';
import { ChatMessage } from '../types';
import { getAdvisorResponse, cleanBotResponse } from '../lib/advisorEngine';

interface ChatbotWidgetProps {
  onOpenBooking: () => void;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: '1',
  sender: 'bot',
  text: '¡Hola! Bienvenido a Be Corporate. Soy tu asesor en efectividad de reuniones y el programa piloto High-Performance Meetings™. ¿En qué puedo orientarte hoy?',
  timestamp: 'Ahora',
};

const SUGGESTED_PROMPTS = [
  '¿Cómo funciona el piloto corporativo de 4 semanas?',
  '¿Qué formato y entregables incluye el programa?',
  '¿Cuáles son las 5 fases de The Be System™?',
  '¿Para qué tipo de equipos está recomendado?',
  '¿Cómo puedo agendar una conversación ejecutiva?',
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Error de conexión con el asesor');
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: cleanBotResponse(data.response || getAdvisorResponse(query)),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.warn('Contextual advisor response fallback:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: cleanBotResponse(getAdvisorResponse(query)),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <>
      {/* Floating Launcher Button - Reduced to Avatar, expands 'Necesito Ayuda' on hover */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center bg-[#0D0D0D] hover:bg-[#0052CC] text-white p-2 rounded-full shadow-2xl transition-all duration-300 ease-out border border-slate-700/80 hover:border-[#00A3E0] cursor-pointer hover:shadow-[0_10px_25px_rgba(0,82,204,0.35)]"
            aria-label="Necesito Ayuda - Abrir asesor Be Corporate"
          >
            {/* Avatar Circle */}
            <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#0052CC] group-hover:bg-[#003E99] text-white shrink-0 transition-colors shadow-xs">
              <Bot className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00A3E0]"></span>
              </span>
            </div>

            {/* Hover Expanded 'Necesito Ayuda' Button */}
            <div className="max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:pl-2.5 group-hover:pr-4 transition-all duration-300 ease-out overflow-hidden whitespace-nowrap flex items-center">
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                Necesito Ayuda
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] max-h-[640px] h-[85vh] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 font-['Inter']">
          {/* Header */}
          <div className="bg-[#0D0D0D] text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#0052CC] flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">Be Corporate Advisor AI</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00A3E0]"></span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Asesoría</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Reiniciar conversación"
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Context Banner */}
          <div className="bg-[#F0F7FF] px-3.5 py-2 border-b border-sky-100 flex items-center justify-between text-xs text-[#0052CC]">
            <span className="font-medium">
              Piloto Corporativo · 4 semanas · Team Track™
            </span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="text-[11px] font-bold text-[#0052CC] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <span>Agendar</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-[#0052CC] text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>

                  <div
                    className={`text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-500 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#0052CC] animate-bounce" />
                  <div
                    className="w-2 h-2 rounded-full bg-[#0052CC] animate-bounce"
                    style={{ animationDelay: '0.15s' }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-[#0052CC] animate-bounce"
                    style={{ animationDelay: '0.3s' }}
                  />
                  <span className="text-xs text-slate-400 ml-1">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts */}
          {messages.length <= 2 && (
            <div className="p-3 bg-white border-t border-slate-100">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Preguntas frecuentes
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.slice(0, 3).map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[11px] bg-slate-100 hover:bg-blue-50 hover:text-[#0052CC] text-slate-700 px-2.5 py-1 rounded-full border border-slate-200/80 transition-colors text-left truncate max-w-full cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu consulta sobre el piloto..."
              disabled={isLoading}
              className="flex-1 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#0052CC] focus:bg-white text-slate-800"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="bg-[#0052CC] hover:bg-[#003E99] disabled:opacity-40 text-white p-2.5 rounded-md transition-colors shrink-0 cursor-pointer shadow-xs"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

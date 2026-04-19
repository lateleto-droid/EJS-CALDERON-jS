'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minus } from 'lucide-react';
import { chatResponses } from '@/lib/data';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  time: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      type: 'bot',
      text: "Hello! Welcome to EJS Calderon Construction. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      type: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Process response
    setTimeout(() => {
      const lowerInput = text.toLowerCase();
      let responseText = chatResponses[chatResponses.length - 1].response; // Fallback is last item

      for (let i = 0; i < chatResponses.length - 1; i++) {
        const entry = chatResponses[i];
        if (entry.keywords.some(kw => lowerInput.includes(kw))) {
          responseText = entry.response;
          break;
        }
      }

      const botMsg: Message = {
        id: crypto.randomUUID(),
        type: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000); // 1s delay
  };

  const handleQuickReply = (text: string) => {
    handleSend(text);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-[120px] right-[40px] w-[60px] h-[60px] bg-brand rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center text-white z-50 animate-bounce-gentle transition-transform hover:scale-110 active:scale-95"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div 
      className={cn(
        "fixed right-[40px] bottom-[190px] w-[300px] bg-white rounded-[12px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden z-50 flex flex-col transition-all duration-300 origin-bottom-right",
        isMinimized ? "h-[50px]" : "h-[350px]"
      )}
    >
      {/* Header */}
      <div className="bg-jet px-[15px] py-[15px] flex items-center justify-between cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-[10px]">
          <div className="w-[8px] h-[8px] bg-[#00FF00] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <div>
            <h3 className="font-[700] text-[12px] text-white">EJS Support</h3>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="p-1.5 hover:bg-white/10 rounded transition-colors text-gray-300 hover:text-white">
            <Minus size={16} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="p-1.5 hover:bg-white/10 rounded transition-colors text-gray-300 hover:text-white">
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-[15px] space-y-3 bg-white">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex flex-col", msg.type === 'user' ? "items-end" : "items-start")}>
                <div 
                  className={cn(
                    "max-w-[85%] rounded-[8px] px-[10px] py-[10px] text-[11px] shadow-sm",
                    msg.type === 'user' 
                      ? "bg-brand text-white" 
                      : "bg-offwhite text-[#333333]"
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start">
                <div className="bg-offwhite text-[#333333] rounded-[8px] px-[10px] py-[10px] flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies - Only show if last message was from bot */}
          {messages.length > 0 && messages[messages.length - 1].type === 'bot' && !isTyping && (
            <div className="px-4 py-2 bg-gray-50/50 flex flex-wrap gap-2 border-t border-gray-100">
              {['Get a Quote', 'Schedule a Visit', 'Our Services', 'Pricing Info'].map((qr) => (
                <button 
                  key={qr}
                  onClick={() => handleQuickReply(qr)}
                  className="text-[11px] font-medium px-3 py-1.5 border border-brand/30 text-brand rounded-full hover:bg-brand hover:text-white transition-colors"
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-divider p-[10px] bg-white">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="flex items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 bg-transparent border-transparent text-[11px] text-[#666666] focus:ring-0 focus:outline-none p-0"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isTyping}
                className="text-brand disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

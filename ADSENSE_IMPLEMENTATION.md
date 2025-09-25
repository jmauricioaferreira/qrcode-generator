# Implementação do Google AdSense

## ✅ Implementação Correta do AdSense

### 1. Script Principal (já implementado no layout.tsx)

O script principal do AdSense já está sendo carregado corretamente no `layout.tsx` usando `next/script`:

```tsx
<Script
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113577441435329"
  strategy="afterInteractive"
  crossOrigin="anonymous"
/>
```

### 2. Componente AdSense (src/components/adSense.tsx)

Criado um componente reutilizável que implementa corretamente o código fornecido pelo Google:

```tsx
<ins
  className="adsbygoogle"
  style={{ display: "block" }}
  data-ad-client="ca-pub-1113577441435329"
  data-ad-slot="2960169125"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
```

### 3. Como Usar os Componentes

#### AdSense Básico (já implementado no footer)

```tsx
import AdSense from "@/components/adSense";

<AdSense />;
```

#### AdSense com Configurações Personalizadas

```tsx
import AdSenseBanner from "@/components/adSenseBanner";

<AdSenseBanner adSlot="2960169125" adFormat="rectangle" className="my-4" />;
```

### 4. Locais Recomendados para Anúncios

#### ✅ Já Implementado

- **Footer da página principal** - AdSense básico

#### 🔄 Recomendações para Implementar

- **Entre seções** - AdSense horizontal
- **Sidebar** (se houver) - AdSense vertical
- **Antes do conteúdo principal** - AdSense banner

### 5. Exemplo de Implementação Completa

```tsx
// Em qualquer página ou componente
import AdSenseBanner from "@/components/adSenseBanner";

export default function MinhaPagina() {
  return (
    <div>
      {/* Anúncio antes do conteúdo */}
      <AdSenseBanner adSlot="2960169125" adFormat="auto" className="mb-8" />

      {/* Seu conteúdo aqui */}
      <main>{/* Conteúdo da página */}</main>

      {/* Anúncio após o conteúdo */}
      <AdSenseBanner
        adSlot="2960169125"
        adFormat="rectangle"
        className="mt-8"
      />
    </div>
  );
}
```

### 6. Configurações Importantes

#### Estratégia de Carregamento

- **`afterInteractive`**: Script carrega após a página estar interativa
- **`lazyOnload`**: Para anúncios que não são críticos

#### Responsividade

- **`data-full-width-responsive="true"`**: Anúncios se adaptam ao tamanho da tela
- **`data-ad-format="auto"`**: Google escolhe o melhor formato

### 7. Verificação da Implementação

#### ✅ Checklist

- [x] Script principal carregado no layout
- [x] Componente AdSense implementado
- [x] Anúncio no footer funcionando
- [x] TypeScript configurado corretamente
- [x] Estratégia de carregamento otimizada

#### 🔍 Como Verificar se Está Funcionando

1. **Console do navegador**: Verifique se não há erros
2. **Network tab**: Confirme que o script está carregando
3. **Aguarde 1 hora**: Anúncios podem demorar para aparecer
4. **Modo de teste**: Use o AdSense em modo de teste

### 8. Otimizações de Performance

#### Carregamento Lazy

```tsx
// Para anúncios não críticos
<AdSenseBanner adSlot="2960169125" className="lazy-load" />
```

#### Intersection Observer (futuro)

```tsx
// Para carregar anúncios apenas quando visíveis
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  });

  observer.observe(adRef.current);
}, []);
```

### 9. Troubleshooting

#### Problemas Comuns

1. **Anúncios não aparecem**: Aguarde até 1 hora
2. **Erro de CORS**: Verifique se o domínio está aprovado
3. **Script não carrega**: Verifique a conexão com a internet
4. **TypeScript errors**: Verifique as declarações globais

#### Debug

```tsx
// Adicione logs para debug
useEffect(() => {
  console.log("AdSense script loaded:", window.adsbygoogle);
}, []);
```

### 10. Implementação Atual ✅

#### O que já está funcionando:

- ✅ **Script principal** carregado no `layout.tsx`
- ✅ **Componente AdSense** implementado e funcionando
- ✅ **Anúncio no footer** da página principal
- ✅ **TypeScript** configurado corretamente
- ✅ **Performance otimizada** com `next/script`

#### Como adicionar mais anúncios:

1. **Entre seções de conteúdo:**

```tsx
import AdSenseBanner from "@/components/adSenseBanner";

// Entre duas seções
<AdSenseBanner adSlot="2960169125" adFormat="auto" className="my-8" />;
```

2. **No meio do conteúdo:**

```tsx
// Dentro de um componente
<div className="content">
  <p>Primeiro parágrafo...</p>

  <AdSenseBanner adSlot="2960169125" adFormat="rectangle" className="my-6" />

  <p>Segundo parágrafo...</p>
</div>
```

3. **Sidebar (se implementar):**

```tsx
<aside className="sidebar">
  <AdSenseBanner
    adSlot="2960169125"
    adFormat="vertical"
    className="sticky top-4"
  />
</aside>
```

### 11. Próximos Passos Recomendados

#### Implementações Futuras

- [ ] AdSense entre seções de conteúdo
- [ ] AdSense no sidebar (se houver)
- [ ] AdSense lazy loading
- [ ] AdSense com Intersection Observer
- [ ] Múltiplos slots de anúncios
- [ ] AdSense em páginas específicas

#### Monitoramento

- [ ] Google AdSense dashboard
- [ ] Google Analytics integration
- [ ] Performance monitoring
- [ ] Revenue tracking

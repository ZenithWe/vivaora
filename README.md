# VIVAORA — plataforma de viagens

Frontend Next.js 15 + React 19 + TypeScript + Tailwind CSS. Plataforma inicial da agência VIVAORA para viagens nacionais, internacionais, cruzeiros e experiências.

## Executar localmente
```bash
npm install
cp .env.example .env.local
npm run dev
```
Acesse http://localhost:3000.

## Rotas
`/`, `/viagens`, `/destinos`, `/cruzeiros`, `/experiencias`, `/sobre`, `/contato`, `/politicas`, `/login`, `/minha-conta` e `/admin`.

## Configuração Supabase
1. Crie um projeto exclusivo da VIVAORA.
2. Configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
3. Revise e aplique a migration `supabase/migrations/202611170001_initial_schema.sql`.
4. Configure os redirects de autenticação para os domínios local e de produção.
5. Configure papéis administrativos em metadados confiáveis do app, nunca em user_metadata editável pelo usuário.

## Segurança e estado
- Chaves secretas ficam apenas no servidor; nunca usar prefixo `NEXT_PUBLIC_` nelas.
- RLS está habilitado no schema inicial. Políticas de equipe e operações privilegiadas precisam ser concluídas e auditadas antes de armazenar dados reais.
- A área administrativa é apenas uma estrutura visual e ainda não tem autorização implementada.
- Não há confirmação real de disponibilidade, emissão, cobrança, webhook, e-mail ou integração com operadoras.
- Pacotes, preços, imagens e contatos do catálogo são demonstrativos.

## Regras de negócio
- Cotação não é reserva.
- Só confirmar uma reserva após confirmação verificável do fornecedor.
- Pagamento só pode ser reconhecido após webhook validado no servidor, com idempotência.
- Exibir sinal, saldo, vencimento, taxas e regras de cancelamento antes da contratação.
- Minimizar dados pessoais, informar finalidades e manter controles de acesso compatíveis com a LGPD.

## Checklist antes da operação comercial
- [ ] Projeto Supabase dedicado e variáveis configuradas
- [ ] Políticas RLS revisadas por papel e testadas
- [ ] Área administrativa protegida e trilha de auditoria
- [ ] Cadastro de fornecedores e contratos
- [ ] Integração de disponibilidade e confirmação de operadoras
- [ ] Mercado Pago em ambiente de teste, webhook autenticado e idempotência
- [ ] E-mail transacional e canal oficial de atendimento
- [ ] Termos, privacidade, cancelamentos e documentos jurídicos revisados
- [ ] Testes automatizados, build e monitoramento de produção

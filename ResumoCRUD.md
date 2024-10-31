Usuário: CRUD completo (exceto para listar todos os usuários).
Carteira: CRUD parcial (sem exclusão).
Transação: Apenas Create e Read.
Depósito e Conversão: Apenas Create.

1. Usuário
Create (Cadastrar):
POST /api/users/signup - Cadastro de um novo usuário.
Read (Consultar):
GET /api/users/:id - Consultar detalhes de um usuário específico (opcional, pode ser apenas para admins).
GET /api/users/me - Consultar informações do usuário autenticado.
Update (Atualizar):
PUT /api/users/:id - Atualizar informações do usuário (opcional).
Delete (Excluir):
DELETE /api/users/account - Encerrar a conta do usuário.

2. Carteira
Create (Cadastrar):
POST /api/wallet - Criar uma nova carteira (geralmente feito automaticamente ao cadastrar um usuário).
Read (Consultar):
GET /api/wallet/balance - Consultar saldo da carteira do usuário autenticado.
GET /api/wallet/:id - Consultar detalhes de uma carteira específica (opcional, pode ser para admins).
Update (Atualizar):
PUT /api/wallet/:id - Atualizar informações da carteira (pouco comum, geralmente é o saldo que muda).
Delete (Excluir):
DELETE não aplicável (geralmente não se exclui carteiras, mas pode-se encerrar a conta do usuário que inclui a carteira).

3. Transação
Create (Cadastrar):
POST /api/transfer - Realizar uma transferência entre carteiras.
Read (Consultar):
GET /api/transactions - Listar histórico de transações do usuário autenticado.
GET /api/transactions/:id - Consultar detalhes de uma transação específica (opcional, pode ser para admins).
Update (Atualizar):
PUT não aplicável (transações geralmente não são atualizadas).
Delete (Excluir):
DELETE não aplicável (transações geralmente não são excluídas).

4. Depósito (Opcional)
Create (Cadastrar):
POST /api/deposit - Adicionar saldo à conta por um administrador ou serviço de pagamento.
Read (Consultar):
GET não aplicável.
Update (Atualizar):
PUT não aplicável.
Delete (Excluir):
DELETE não aplicável.

5. Conversão de Moeda (Opcional)
Create (Cadastrar)
POST /api/convert - Converter entre diferentes moedas ou tokens
Read (Consultar)
GET não aplicável
Update (Atualizar)
PUT não aplicável
Delete (Excluir)
DELETE não aplicável
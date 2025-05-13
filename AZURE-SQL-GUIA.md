# 💾 Desafio Prático - Banco de Dados no Microsoft Azure

Este repositório contém meus resumos, anotações e dicas práticas sobre a configuração de uma instância de banco de dados na plataforma **Microsoft Azure**, como parte do laboratório do curso.

## 🧠 Objetivos do Desafio

- Aplicar os conceitos aprendidos sobre banco de dados em ambiente de nuvem.
- Praticar a criação e configuração de instâncias de banco de dados no Azure.
- Documentar o processo técnico para apoiar estudos futuros.
- Utilizar o GitHub como ferramenta de compartilhamento de conhecimento.

---

## 📝 Etapas Realizadas

1. **Criação de Conta no Microsoft Azure**
   - Conta gratuita ativada com crédito inicial.
   - Configuração de perfil e painel de controle.

2. **Criação da Instância de Banco de Dados SQL**
   - Acesso ao portal do Azure.
   - Navegação até “Banco de Dados SQL”.
   - Definição de nome, grupo de recursos e localização.
   - Criação de um servidor lógico com usuário e senha.
   - Escolha de camada de desempenho (vCore / DTU).
   - Configuração de regras de firewall para acesso externo.

3. **Configuração de Acesso**
   - Inclusão do IP local nas regras de firewall.
   - Acesso ao banco via SQL Server Management Studio (SSMS) e/ou Azure Data Studio.

4. **Testes de Conexão**
   - Conexão bem-sucedida utilizando credenciais criadas.
   - Criação de tabela e inserção de dados simples.

5. **Monitoramento e Segurança**
   - Acompanhamento do desempenho via painel do Azure.
   - Revisão de configurações de backup, auditoria e criptografia.

---

## 💡 Dicas e Observações

- Use nomes amigáveis e padronizados para identificar recursos no portal.
- Guarde as credenciais com segurança; elas não são recuperáveis.
- Sempre configure as **regras de firewall** para permitir conexões do IP atual.
- Utilize a ferramenta **Query Editor (Preview)** do próprio portal para executar comandos SQL rapidamente.
- Configure alertas de custo se estiver usando uma conta gratuita para evitar cobranças.

---

## 📁 Estrutura do Repositório

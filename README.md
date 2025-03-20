# 🌍 **TripleTen - Web Project API Full**

## 📖 **Descrição**  
O **Web Project API Full** é uma aplicação **fullstack** que combina **front-end e back-end** para permitir que usuários criem e personalizem seus perfis, adicionem fotos e interajam com publicações. O sistema inclui funcionalidades de **autenticação, gerenciamento de perfis e compartilhamento de imagens**, criando uma experiência de rede social interativa.

## 🏗 **Arquitetura do Projeto**  
O projeto é dividido em duas partes principais:

📂 **/frontend** - Aplicação React.js (Vite) responsável pela interface do usuário.  
📂 **/backend** - API RESTful construída com Node.js e Express para gerenciamento de dados e usuários.

---

## 💻 **Tecnologias Utilizadas**  

### **Front-end**  
- **Linguagem:** JavaScript (ES6+)  
- **Bibliotecas:** React.js, Vite  
- **Estilização:** CSS com metodologia BEM  
- **Gerenciamento de estado:** (Se houver, Redux, Context API, etc.)  
- **Requisições HTTP:** Fetch API / Axios  

### **Back-end**  
- **Servidor:** Node.js, Express.js  
- **Banco de Dados:** MongoDB (NoSQL)  
- **Autenticação:** JWT (JSON Web Token)  
- **Validação de dados:** Celebrate / Joi  
- **Gerenciamento de rotas:** Express Router

---

## 🚀 **Funcionalidades Principais**  

✅ **Cadastro e autenticação de usuários** (JWT)  
✅ **Criação e edição de perfis** (foto, nome e ocupação)  
✅ **Upload e gerenciamento de imagens**  
✅ **Interação com publicações** (curtidas e comentários)  
✅ **API segura e organizada**  
✅ **Layout responsivo e moderno**

---

## 🛠 **Como Rodar o Projeto Localmente**  

### **1️⃣ Clonar o repositório**  
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
### **2️⃣ Configurar o Back-end**
```bash
cd backend
npm install
npm run dev
O back-end estará rodando em http://localhost:3000
```
3️⃣ Configurar o Front-end
```bash
cd ../frontend
npm install
npm run dev
O front-end estará rodando em http://localhost:5173
```
### 4️⃣ Testar a API
```
Para testar os endpoints do back-end, você pode utilizar o Postman ou Insomnia.
```
### 📂 Estrutura do Projeto
```bash
/web_project_api_full
  ├── /frontend        # Código do front-end (React + Vite)
  │   ├── /components  # Componentes reutilizáveis
  │   ├── /pages       # Páginas principais da aplicação
  │   ├── /styles      # Arquivos CSS usando BEM
  │   ├── App.jsx      # Componente principal
  │   ├── main.jsx     # Ponto de entrada da aplicação
  │
  ├── /backend         # Código do back-end (Node.js + Express)
  │   ├── /controllers # Lógica dos endpoints
  │   ├── /models      # Modelos do banco de dados
  │   ├── /routes      # Definição das rotas da API
  │   ├── /middlewares # Middlewares de autenticação e validação
  │   ├── /config      # Configurações do banco de dados e JWT
  │   ├── server.js    # Arquivo principal do servidor
  │
  ├── package.json     # Configuração geral do projeto
  ├── README.md        # Documentação do projeto
```
### 🔮 Futuras Melhorias
```
🔹 Melhorar a experiência do usuário com animações e transições suaves
🔹 Implementar upload de imagens no back-end (ex: Cloudinary, Firebase)
🔹 Melhorar o gerenciamento de estado no front-end
🔹 Criar um sistema de notificações em tempo real
```
### 👨‍💻 Autor
#### Alisson Rodrigues
📧 rodrigues101112@gmail.com





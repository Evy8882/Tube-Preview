<h1 align="center">Tube Preview </h1>

> Aplicativo web que resume vídeos do youtube com uma IA com base no audio transcrito a partir da URL do vídeo
<img src="https://github.com/user-attachments/assets/e2bdc167-d43e-48ac-a1be-b3a473ab4d5c" width="800px"/>

Deploy:
https://tube-preview.vercel.app/ (possível haver erros)

## Estrutura de pastas

```markdown
- /api : Backend do projeto com ferramentas para transcrição e resumo com IA.
- /frontend : Parte visual do projeto.
   - /src : Código fonte principal do frontend.
      - /assets : Recursos estáticos como imagens e ícones.
   - /public : Arquivos estáticos acessíveis diretamente.
```

## Ferramentas Utilizadas

* <p><img align="center" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /> React</p>
* <p><img align="center" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /> Typescript</p>
* <p><img align="center" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /> Vite</p>
* <p><img align="center" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /> Node</p>
* <p><img align="center" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /> Python</p>
* <p><img align="center" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /> Git</p>

## Instruções para Clonagem e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/Evy8882/Tube-Preview.git
   cd Tube-Preview
   ```

2. Configure o frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Configure o backend:
   ```bash
   cd api
   pip install -r requirements.txt
   ```

4. Crie uma chave de API do DeepSeek R1 no [OpenRouter](https://openrouter.ai/) e salve-a em um arquivo chamado `apikey.txt` na pasta `/api`:
   ```plaintext
   YOUR_API_KEY
   ```

5. Execute a API:
   ```bash
   python index.py
   ```

## Autor
<a href="https://github.com/Evy8882">Everton Mancio</a>

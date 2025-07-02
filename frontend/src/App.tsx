import { useState } from 'react'
import './App.css'

function App() {
  const [urlInput, setUrlInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (urlInput.startsWith("https://youtu.be/") || urlInput.startsWith("https://www.youtube.com") || urlInput.startsWith("https://youtube.com")) {
      setResult("Carregando...");
      setLoading(true);
      fetch(`http://127.0.0.1:5000/?video=${urlInput}`)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Erro ao buscar resumo.");
          }
        })
        .then(data => {
          console.log(data);
          setResult(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao buscar resumo:", error);
          setResult("Erro ao buscar resumo.");
          setLoading(false);
        });
    }
  }

  return (
    <div className="app">

      <h1>Tube Preview</h1>
      <p className='description'>Resuma vídeos do Youtube apenas com a URL do vídeo</p>
      <form action="" className='form' onSubmit={handleSubmit}>
       <label htmlFor="text-input">Cole a URL do vídeo:</label>
        <div className='input-container'>
          <input type="text" id='text-input' placeholder='Ex: https://youtu.be/...' value={urlInput}
          onChange={(e)=>{
            setUrlInput(e.target.value);
          }} />
          <button>{loading ? <div className='loader'></div> : "Resumir"}</button>
        </div>
        {urlInput.length > 0 && (urlInput.startsWith("https://youtu.be/") || urlInput.startsWith("https://www.youtube.com") || urlInput.startsWith("https://youtube.com")) ? (
          ""
        ) : urlInput.length > 0 ? (
          <p style={{color: "#ff1a4d"}} className="invalid-url">URL inválida. Certifique-se de que começa com https://youtu.be/, https://www.youtube.com ou https://youtube.com</p>
        ) : null}
      </form>
      <section className='result-container'>
        <h2>Resumo:</h2>
        <div className='result-content'>
          {result.length > 0 ? (
            <p>{result}</p>
          ) : (
            <p className='no-result'>Cole a URL do vídeo para ver o resumo</p>
          )}
        </div>
      </section>

      <footer>
        desenvolvido por: <a href="https://github.com/Evy8882" target="_blank">Everton Mancio</a>
      </footer>
    </div>
  )
}

export default App

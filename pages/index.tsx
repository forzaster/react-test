import { useState } from 'react';
import Layout from '../components/Layout'
import styles from '../components/main.module.css'

const Home = () => {
  const [input_text, setText] = useState('')
  const [result_text, setResultText] = useState('')

  const onclick = () => {
    console.log('onclick')
    console.log(input_text)

    setResultText(input_text)
  }

  return (
    <Layout title="Home">
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <p>
            <label>
              Input text : 
              <input name="input_text" onChange={e => setText(e.target.value)}/>
            </label>
          </p>
          <p>input : {input_text}</p>
          <p>result : {result_text}</p>
          <button onClick={onclick}>submit</button>
        </div>
      </div>
    </main>
    </Layout>
  );
}

export default Home

import styles from './index.module.css'

export default function NiceCssModulesDemo() {
  return <div className={styles.text}>Scoped styles!</div>
}

// @timi Ich hab das mit CSS Modules tatsächlich gar nicht einrichten müssen. Funktionierte out of the box.
// Alles was Du dafür tun musst, ist deine CSS-Dateien `index.module.css` statt `index.css` zu nennen.
// Daraufhin kannst Du den default export dieser CSS-Datei importieren (hier: Zeile 1) und erhältst ein Objekt mit deinen Klassennamen als
// properties auf diesem Objekt. Hier kann ich also `styles.text` benutzen, weil es in meinem CSS eine `.test` Klasse gibt.
// CSS Modules macht mir dann im Frontend eine fancy unique Klasse daraus, die niemals clashen wird. Kannst ja mal nachsehen 😎 😎 😎 😎 😎 😎

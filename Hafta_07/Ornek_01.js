// Basit giris ekranini JavaScript ile sayfaya yerlestirir ve sadece cerceve ile sunar.
(function () {
  const styles = `
    :root {
      --bg: #f9fafb;
      --card: #ffffff;
      --text: #111827;
      --muted: #4b5563;
      --input-bg: #ffffff;
      --input-border: #d1d5db;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .login-card {
      width: min(420px, 100%);
      background: var(--card);
      border: 1px solid var(--input-border);
      border-radius: 12px;
      padding: 28px;
    }
    .login-card h1 {
      margin: 0 0 8px;
      font-size: 28px;
      letter-spacing: 0.3px;
    }
    .login-card p {
      margin: 0 0 24px;
      color: var(--muted);
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 18px;
    }
    label {
      font-size: 14px;
      color: var(--muted);
    }
    input {
      background: var(--input-bg);
      border: 1px solid var(--input-border);
      color: var(--text);
      border-radius: 8px;
      padding: 12px 14px;
      font-size: 15px;
      transition: border-color 180ms ease, box-shadow 180ms ease;
    }
    input::placeholder {
      color: var(--muted);
      opacity: 0.8;
    }
    input:focus {
      outline: none;
      border-color: var(--text);
      box-shadow: 0 0 0 2px rgba(17, 24, 39, 0.08);
    }
    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-top: 8px;
    }
    button {
      appearance: none;
      border: 1px solid var(--text);
      background: var(--card);
      color: var(--text);
      font-weight: 700;
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 16px;
      cursor: pointer;
      width: 140px;
      transition: transform 160ms ease, border-color 160ms ease;
    }
    button:hover { transform: translateY(-1px) scale(1.01); border-color: #000; }
    button:active { transform: translateY(0); }
    .forgot {
      color: var(--text);
      font-size: 14px;
      text-decoration: none;
      transition: opacity 150ms ease;
    }
    .forgot:hover { opacity: 0.8; text-decoration: underline; }
    .error {
      margin: 10px 0 0;
      color: #b91c1c;
      font-size: 14px;
      min-height: 18px;
    }
    @media (max-width: 480px) {
      .login-card { padding: 24px; }
      button { width: 100%; }
      .actions { flex-direction: column; align-items: stretch; }
    }
  `;

  const template = `
    <section class="login-card">
      <h1>Giris Yap</h1>
      <p>Devam etmek icin kullanici adi ve sifreni gir.</p>
      <form>
        <div class="field">
          <label for="username">Kullanici adi</label>
          <input id="username" name="username" type="text" placeholder="ornek.kullanici" required />
        </div>
        <div class="field">
          <label for="password">Sifre</label>
          <input id="password" name="password" type="password" placeholder="********" required />
        </div>
        <div class="actions">
          <a class="forgot" href="#">Sifremi unuttum</a>
          <button type="submit">Giris yap</button>
        </div>
        <p class="error" aria-live="polite"></p>
      </form>
    </section>
  `;

  const styleEl = document.createElement("style");
  styleEl.textContent = styles;
  document.head.appendChild(styleEl);
  document.body.innerHTML = template;

  const form = document.querySelector("form");
  const errorEl = document.querySelector(".error");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")?.value?.trim();
    const password = document.getElementById("password")?.value;

    if (username === "mustafa" && password === "123") {
      window.location.href = "bos.html";
    } else if (errorEl) {
      errorEl.textContent = "Kullanici adi veya sifre hatali.";
    }
  });
})();

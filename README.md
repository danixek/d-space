# [ d ]-space

> **Web Application Architecture & Digital Space**  
> Koncept rozšiřitelné aplikace a rozcestníku pod jednotnou brand hlavičkou.

---

## 🎯 O projektu & Filosofie

**[ d ]-space** není jen portfolio vývojáře či osobní web, ale koncept rozšiřitelné architektury pod stejnou brand hlavičku – a to nejen vlastními produkčními projekty, ale také selfhostingovými aplikacemi podobné např. Mastodonu či PeerTube.

Hlavní myšlenkou je vytvořit **decentralizovaný digitální prostor**, který propojuje prezentační vrstvu, vlastní webové aplikace i nezávislé služby do jednoho funkčního a vizuálně konzistentního celku.

Prezentační část projektu je koncipována modulárně díky modernímu Razor Pages, které je pro danou situaci vhodnější než klasické MVC. Důraz je kladen na architekturu, udržitelnost kódu a možnost adaptace na nové požadavky. C# a .NET tvoří stabilní páteř systému, zatímco technická vrstva frontendu zůstává plně otevřená – výběr technologií je tak možné kdykoliv upgradovat i na Blazor, TypeScript či Vue.js podle potřeb daného modulu.

---

## 🛠 Tech Stack & Architektura

* **Framework:** ASP.NET Core (Razor Pages)
* **Backend:** C# (.NET 9+)
* **Styling & UI:** Bootstrap, Custom CSS, zaměření na responzivitu

---

## ⚙️ Nastavení po naklonování repozitáře

1. Zkopírujte soubor v adresáři `Properties/PublishProfiles/Publish.pubxml.template` na `Publish.pubxml`.
2. Nahraďte hodnoty `YOUR_SERVER_NAME`, `YOUR_SITE_OR_USERNAME` a `YOUR_USERNAME` svými skutečnými přihlašovacími údaji k hostingu.

---

## 🚀 Jak projekt spustit (Development)

## Jak projekt spustit

Pro spuštění projektu doporučuji použít pokročilé editory jako Visual Studio Community nebo JetBrains Rider.
Alternativně lze použít i Visual Studio Code s doinstalovaným rozšířením C# Dev Kit, který nainstaluje .NET SDK včetně nástroje dotnet.

1. Naklonujte repozitář  
   `git clone https://github.com/danixek/d-space.git`  
   `cd d-space`
2. Ověřte připojení k databázi v souboru `appsettings.json`  
   (pokud používáte výchozí nastavení, přeskočte)
   *(databáze momentálně chybí – přeskočte taktéž)*
3. Sestavte projekt:  
   `dotnet build`  
   Spuštěním se zkontroluje struktura projektu a automaticky se stáhnou závislosti - NuGet balíčky.
4. Proveďte migraci databáze *(žádná prozatím není – přeskočte tento krok)*:
   ```bash příkazy  
   dotnet ef database update
5. Spusťte projekt:  
   `dotnet run`

> 💡 **Poznámka:** Pokud se příkaz `dotnet ef` nezdaří, je pravděpodobně potřeba doinstalovat EF CLI nástroj:  
`dotnet tool install --global dotnet-ef`

Po úspěšném spuštění se v konzoli objeví adresa (např. https://localhost:7222).
Otevřete ji v prohlížeči – projekt by měl být dostupný.
Ve Visual Studiu Community nebo Rideru se aplikace často spustí automaticky s otevřením prohlížeče.
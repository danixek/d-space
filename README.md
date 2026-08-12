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

## 🎨 Designové principy (UX)

Vizuální stránku nezanedbávám, ale pracuji s ní střídmě a podle role jednotlivých prvků. **Vizuální hierarchii nevnímám jako dekoraci, ale jako nástroj pro řízení pozornosti uživatele.** Výraznost proto neurčuji automaticky barvou nebo velikostí – rozhoduje především účel prvku a jeho dopad.

Velké logo má smysl tam, kde silný brand podporuje důvěru a zapamatovatelnost. **Samotná velikost ale slabý brand nezachrání.** Na mém webu proto používám výraznost střídmě: běžné UI prvky držím kolem radiusu **7px**, zatímco logo dostává více prostoru pro osobitost (**1.6em**). Profilovka používá **1em**, aby působila moderně, ale nepoutala více pozornosti, než odpovídá její roli. Naopak CTA pro stažení CV má uživatele přivést ke konkrétní akci, proto **upoutává vlastní stylizací, nikoliv pouze kontrastní barvou**.

Ikony vnímám jako **doprovodný prvek**. Mají podporovat význam obsahu, ne soutěžit s ním o pozornost. **Pokud svou funkci plní i méně výrazná ikona, nemám potřebu ji měnit jen kvůli estetické preferenci.**

Stejnou střídmost uplatňuji i při refaktorizaci. **První implementaci toleruji s estetickými nedostatky**, pokud je v danou chvíli důležitější ověřit funkčnost nebo strukturu. Když se ale k dané části vracím kvůli refaktorizaci, **nechci bezdůvodně zachovávat estetický dluh**.

Stejně jako při náboru přemýšlím nad tím, jak firmu zaujmout co nejefektivněji, považuji za důležité stejnou pozornost věnovat i zákazníkovi. **Refaktorizaci proto nevnímám pouze jako technickou investici.** Pokud do ní firma už vkládá čas a prostředky, dává mi smysl využít tuto příležitost i ke zlepšení prezentace produktu – **v rozsahu odpovídajícím velikosti celé investice**.

Proto jsem na webu zvolil Segoe UI – jednoduché a dobře čitelné písmo, které nechává pozornost na obsahu a podporuje uživatele v cestě k požadované akci. Věřím, že kvalitní UX lze u juniora do určité míry odvodit i bez explicitního zadání. Data mohou ukázat, kde uživatelé odcházejí, ale sama o sobě nemusí říct, proč odcházejí ani jak je přirozeně dovést dál k cíli.

---

## ⚙️ Nastavení po naklonování repozitáře

1. Zkopírujte soubor v adresáři `Properties/PublishProfiles/Publish.pubxml.template` na `Publish.pubxml`.
2. Nahraďte hodnoty `YOUR_SERVER_NAME`, `YOUR_SITE_OR_USERNAME` a `YOUR_USERNAME` svými skutečnými přihlašovacími údaji k hostingu.

---

## 🚀 Jak projekt spustit (Development)

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

Po úspěšném spuštění se v konzoli objeví adresa (např. https://localhost:7001).
Otevřete ji v prohlížeči – projekt by měl být dostupný.
Ve Visual Studiu Community nebo Rideru se aplikace často spustí automaticky s otevřením prohlížeče.
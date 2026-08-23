# [ d ]-Space

> **Web Application Architecture & Digital Space**  
> Koncept rozšiřitelné aplikace a rozcestníku pod jednotnou brand hlavičkou.

---

## 🎯 O projektu

**[ d ]-Space** není pouze prezentační web nebo portfolio. Je to koncept
ekosystému, který propojuje vlastní webové aplikace a externí
self-hostované služby pod jednotnou vizuální a uživatelskou vrstvou.

Cílem není vytvořit pouze několik samostatných projektů, ale postupně
z nich vytvořit **smysluplný celek**, ve kterém mají jednotlivé aplikace
své místo a mohou spolupracovat.

Plánovaný vývoj zahrnuje **globální jednotné přihlášení (SSO)** pro
jednotlivé služby a další rozvoj **[ d ]-Base** jako centrálního prostředí
s widgety.

[ d ]-Base původně vznikl jako jednodušší domovská stránka prohlížeče pro ukládání
a načítání uživatelských preferencí a přihlášení přes Google. Další vývoj
jej má posunout směrem k vlastní správě účtů, jednotné identitě a
centrálnímu dashboardu.

Projekt proto postupně rozšiřuji podle toho, **co má smysl pro celý
ekosystém**, nikoliv pouze podle jednotlivých technologií.

---
---

## 💡 Proč projekt vzniká

Technologie pro mě nejsou cílem samy o sobě. Nejvíce mě motivuje
**vize produktu, jeho komplexita a možnost propojit jednotlivé části
do funkčního celku**.

Právě proto se při vývoji nesoustředím pouze na otázku:

> *„Jak tuto funkci naprogramovat?“*

ale také:

> *„Proč ji vytvářet a jak zapadne do celého systému?“*

Tento přístup ovlivňuje i volbu technologií. Pokud určitá část projektu
vyžaduje jiný nástroj, považuji za přirozené se jej naučit a použít jej
tam, kde přináší smysl. Součástí dalšího vývoje [ d ]-Base je proto také
postupný přepis do **TypeScriptu/Vue.js**.

Projekt mi zároveň umožňuje učit se nové technologie na skutečných
problémech místo izolovaných cvičení do šuplíku.

---

## 🧠 Způsob vývoje

Při vývoji se snažím využívat své silné stránky – především **abstraktní
myšlení, architekturu a hledání souvislostí** – jako prostředek k rozvoji
oblastí, které pro mě nejsou přirozené.

Novou syntaxi proto nejlépe osvojuji při řešení problému, který má
architektonický nebo produktový význam. Samotné izolované procvičování
syntaxe pro mě naopak představuje výrazně slabší motivační prostředí.

U prvních úkolů proto může část motivace nahradit také **esteticky
uspokojivý výsledek**. Ten poskytuje zpětnou vazbu, na které lze dále
stavět, než si osvojím potřebnou syntaxi a lokální postupy.

---

## 🎨 Design & UX

Vizuální stránku nevnímám pouze jako dekoraci. **Vizuální hierarchie je
pro mě nástrojem pro řízení pozornosti uživatele.**

Výraznost jednotlivých prvků proto neurčuji automaticky velikostí nebo
barvou. Rozhoduje jejich role a to, jakou akci či informaci mají
podpořit.

Logo může být výraznější, protože podporuje identitu brandu. CTA může
používat vlastní stylizaci, protože má uživatele přivést ke konkrétní
akci. Naopak ikony používám střídmě, pokud jejich význam funguje i bez
výrazného vizuálního akcentu.

Stejný princip používám při refaktorizaci. Estetické nedostatky první
implementace toleruji, pokud je důležitější ověřit funkčnost nebo
strukturu. Pokud se však k dané části vracím při refaktorizaci,
považuji za smysluplné odstranit i odpovídající **estetický dluh**.

Refaktorizaci proto nevnímám pouze jako technickou investici. Pokud už
produkt věnuje čas a prostředky změně, může být vhodné využít část této
investice také ke zlepšení jeho prezentace a UX.

---

## 🏗 Architektura

Prezentační část využívá **ASP.NET Core Razor Pages**. Architektura je
navržena modulárně tak, aby bylo možné jednotlivé části postupně
rozšiřovat a měnit podle potřeb projektu. Při návrhu uplatňuji princip KISS
– pro tento typ aplikace je Razor Pages oproti MVC kompaktnější.

**C# a .NET** tvoří současnou backendovou páteř. Frontendová vrstva však
není považována za pevně danou – technologie je možné měnit podle
konkrétního účelu jednotlivých modulů.

### Aktuální stack

- **Framework:** ASP.NET Core / Razor Pages
- **Backend:** C# / .NET 9+
- **Styling:** Bootstrap, vlastní CSS
- **Frontend:** postupný rozvoj podle potřeb jednotlivých částí
- **Plánovaný vývoj:** TypeScript, globální SSO, [ d ]-Base dashboard

---

## 🚧 Plánovaný vývoj

- [ ] Globální jednotné přihlášení (SSO)
- [ ] Vlastní globální správa uživatelských účtů
- [ ] Přepis a modernizace [ d ]-Base do TypeScriptu
- [ ] Rozšíření [ d ]-Base o centrální widgety
- [ ] Propojení jednotlivých aplikací v rámci ekosystému
- [ ] Další rozvoj UX a vizuální identity

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
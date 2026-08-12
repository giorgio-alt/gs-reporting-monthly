# Zadani pro Codex/Coder: UI upravy dashboardu, Behavior Analytics, AI Max a Karsa AI

## Kontext

Zapracuj nasledujici klientsky feedback do aktualni cervencove verze reportu. Zachovej existujici strukturu, data a vizualni jazyk aplikace. Zmeny maji byt lokalni a nemaji rozbit mesicni logiku ani ostatni galerie.

Referencni screenshoty jsou ulozene primo v repozitari:

- `public/assets/references/ui-feedback-2026-08-12/budget-colors.png`
- `public/assets/references/ui-feedback-2026-08-12/marketing-costs-context.png`
- `public/assets/references/ui-feedback-2026-08-12/web-health-bars.png`
- `public/assets/references/ui-feedback-2026-08-12/ai-max-thumbnail.png`
- `public/assets/references/ui-feedback-2026-08-12/karsa-ai-crops.png`

## 1. Rozpocet: neutralnejsi barevnost

Dotcene misto: budget blok generovany v `src/data/dashboard.js`, styly zejmena `.budgetCard` v `src/styles/components.css`.

- U karty `Plneni budgetu` odstran dominantni cervenou, ktera pusobi prilis alarmujicne.
- Fakt, ze je cerpani na 180,2 % a rozdil +300 594 Kc, zachovej. Nemen data ani vyznam, pouze ton prezentace.
- Pro hlavni cislo, progress a bezny stav pouzij neutralni tmave zelenosedou, petrolovou nebo grafitovou z existujici palety.
- Presah nad plan muze mit jemny teply akcent, ale ne velkou cervenou plochu. Cervena ma zustat rezervovana pro skutecne kriticky stav.
- Badge `Precerpano o 80,2 %` a `Presah nad plan 80,2 %` zjednodus tak, aby se stejna informace zbytecne neopakovala dvakrat. Preferuj jeden jasny stavovy badge.
- Progress bar ma byt citelny i pri hodnote nad 100 %. Vizualne oddel 100 % planu od presahu, nebo hodnotu bezpecne omez pro sirku a presah vyjadri samostatne. Element nesmi pretekat.

## 2. Marketingove naklady: oprava kontrastu zmeny

Dotcene misto: `Aktualni mesic v kontextu` v `src/data/dashboard.js` a souvisejici styly v `src/styles/components.css`.

- Hodnota `+61,3 % YoY` se dnes zobrazuje jako nekontrastni text uvnitr zeleneho pruhu.
- Zobraz ji jako standardni delta badge/pill, nikoliv jako loading/progress bar.
- Pouzij dostatecny kontrast textu a pozadi alespon WCAG AA.
- Zkontroluj kolizi obecne tridy `delta`, `good` nebo podobneho selektoru. Oprava ma byt bezpecna i pro dalsi KPI boxy, aby se z delta badge nikde jinde nestal plnosirkovy pruh.
- Cislo, YoY vyznam a pozitivni smer zmeny zachovej.

## 3. MS Clarity / Web Health: odstranit sloupcove mini grafy

Dotcene misto: `behaviorHealthMetrics`, `renderBehaviorHealthTrend()` a `renderBehaviorHealthMetric()` v `src/data/products.js`.

- Ze vsech karet v casti `1. Web Health` uplne odstran fialove sloupcove mini grafy.
- Nech nadpis metriky, aktualni hodnotu, mezimesicni zmenu, pocet sessions a klientsky komentar.
- Po odstraneni grafu uprav vertikalni rytmus karet; nesmi po nem zustat prazdne misto.
- Pokud `renderBehaviorHealthTrend()` uz nebude nikde pouzity, odstran i mrtvy renderer a jeho nepotrebne CSS.

## 4. Behavior Trends: informacni tooltip ke kazde metrike

Dotcene misto: `behaviorTrendSeries`, `renderBehaviorTrend()` v `src/data/products.js` a odpovidajici styly/JS.

- Ke kazdemu nazvu v `5. Behavior Trends` pridej malou info ikonu.
- Tooltip se musi otevrit jak na hover, tak pri focusu z klavesnice; na mobilu po tapnuti.
- Tooltip nesmi byt orezany kartou ani prekryty dalsim obsahem. Musi mit citelny kontrast a rozumne omezenou sirku.
- Nezobrazuj jen atribut `title`; vytvor skutecny pristupny tooltip s `aria-describedby`.
- Do datove struktury pridej pro kazdou serii napriklad `definition` a `calculation`, aby text nebyl natvrdo rozesety v rendereru.

Obsah tooltipu:

| Metrika | Co rika | Jak se pocita |
| --- | --- | --- |
| Homepage -> Product | Kolik sessions z homepage pokracovalo na produkt. | Sessions, ktere dosly na produkt / sessions na zacatku homepage cesty x 100. |
| Product -> Cart | Jakou cast produktovych sessions se podarilo posunout do kosiku. | Sessions, ktere dosly do kosiku / sessions na produktu x 100. |
| Cart -> Checkout | Jakou cast kosiku uzivatele posunuli do checkoutu. | Sessions, ktere dosly do checkoutu / sessions v kosiku x 100. |
| Checkout -> Purchase | Jakou cast checkout sessions uzivatele dokoncili nakupem. | Sessions s nakupem / sessions v checkoutu x 100. |
| Dead Clicks | Podil sessions s kliknutim na prvek, po kterem nenastala viditelna odezva. | Sessions s alespon jednim dead clickem / vsechny sledovane sessions x 100. |
| Quick Backs | Podil sessions, ve kterych se uzivatel po otevreni stranky rychle vratil zpet. | Sessions s quick back udalosti / vsechny sledovane sessions x 100. |
| Rage Clicks | Podil sessions s opakovanym rychlym klikanim do stejne male oblasti. | Sessions s alespon jednim rage clickem / vsechny sledovane sessions x 100. |

U Clarity metrik pouzij klientsky srozumitelnou formulaci vyse. Pokud se implementace opira o konkretni export Clarity s mirne jinym jmenovatelem, zachovej terminologii zdroje a neupravuj samotna cisla.

## 5. AI Max: mensi thumbnail, plny detail

Dotcene misto: AI Max blok a `renderShot()` v `src/data/ppc.js`, styly `.ppcAssetGrid*` a `.ppcAssetShot`.

- Zmensi thumbnail `AI Max - sestavy`, aby v beznem layoutu nezabiral temer celou sirku sekce.
- V desktopu pouzij kompaktni nahled s rozumnou maximalni sirkou; muze byt zarovnany vlevo pod tabulkou. Na mobilu zustane responzivni.
- Nahled musi zachovat puvodni pomer stran. Nepouzivej `object-fit: cover` ani pevnou vysku, ktera odreze obsah.
- Klikaci plocha a tlacitko `Otevrit detail` musi zustat zretelne.
- Po rozkliknuti otevri `full` asset `ai-max-ad-groups-07-2026.png`, nikoliv thumbnail.
- Lightbox musi zobrazit cely obraz bez orezu, centrovane, s `max-width`/`max-height` podle viewportu. U sirokeho obrazu povol smysluplne zvetseni nebo otevreni originalu v plne velikosti.

## 6. Karsa AI: obnovit spatne vstupni vyrezy

Dotcene misto: Karsa galerie v `src/data/ppc.js`, assety v `public/assets/report-jul-26/ppc/`.

Nejde jen o CSS problem. Nektere soucasne PNG jsou orezane uz na vstupu. Je nutne znovu pripravit plne assety z originalnich screenshotu/slidu prezentace, ne zvetsovat stavajici poskozene vyrezy.

Prioritne oprav vsechny ctyri obrazky v bloku `Vyvoj produktovych clusteru`:

- `karsa-cluster-summary-07-2026.png`
- `karsa-cluster-products-07-2026.png`
- `karsa-cluster-roas-history-07-2026.png`
- `karsa-product-movements-07-2026.png`

Pozadavky na novy vyrez:

- Je prijatelne ponechat i vetsi cast puvodniho slidu/prezentacniho podkladu, pokud je to jediny zpusob, jak zachovat kompletni graf, titul, legendu, osy a hodnoty.
- Nikdy neorezavej zacatek titulku, levou osu, legendu, popisky ani posledni hodnoty na prave strane.
- `Karsa AI - souhrn clusteru`: musi byt videt cele nazvy metrik i vsechny hodnoty, ne jen prava cast tabulky.
- `Karsa AI - pocet produktu`: musi byt videt cely titul grafu, legenda, plocha grafu a osy.
- `Karsa AI - vyvoj ROAS`: musi byt videt cely titul, legenda vsech clusteru, cela casova osa a vsechny krivky.
- `Karsa AI - pohyby produktu`: musi byt videt legenda `Moved In / Moved Out / Added / Removed`, cely graf a osy.
- Pro kazdy obrazek vytvor samostatny optimalizovany thumbnail. `full` a `thumb` nesmi byt omylem stejny orez, pokud thumbnail potrebuje jiny vykres.
- Aktualizuj `image_size` v `src/data/ppc.js` podle skutecnych rozmeru novych full assetu.
- Pred nahrazenim si ponech stejna stabilni jmena souboru, nebo oprav vsechny reference atomicky.

Zdrojova prezentace nemusi byt pri implementaci na puvodni ceste v Downloads. Pokud neni dostupna, nezkousej chybejici obsah domyslet ze stavajiciho orezu; vyzadej si znovu originalni PPTX/PDF nebo plny export prislusnych slidu.

## 7. Doplnit informace z prezentacniho podkladu ke Karsa grafum

Zachovej existujici klientsky kontext a rozdel ho tesne ke spravnym vizualum:

- `Souhrn clusteru`: vysvetlit, ze Karsa rozdeluje PMax produkty do vykonnostnich portfolii a pomaha rozlisit, kde se opira rust o zdrave skupiny produktu.
- `Pocet produktu`: popsat skladbu portfolia v jednotlivych clusterech a zmenu velikosti clusteru v case.
- `Vyvoj ROAS`: vysvetlit, ze krivky ukazuji rozdilny vyvoj navratnosti clusteru; neprezentovat kratkodoby pohyb jako jistou predikci.
- `Pohyby produktu`: vysvetlit `Moved In`, `Moved Out`, `Added` a `Removed`. Vyssi pocet presunu muze znamenat ucici se nebo nestabilni fazi, postupna stabilizace je znamka usazovani produktoveho rozdeleni.
- Zachovej existujici slovnicek `ROAS`, `tROAS` a `EMA 7` a text k dennimu profitu/MACD.
- V PTC Manageru zatim zustava doporuceni drzet puvodni tROAS: nejprve probihala ucici faze a nasledny vykon byl nekonzistentni. Formuluj to klientsky, jako vecny komentar digitalniho marketera, ne jako interní poznamku.

Nevymyslej nova cisla ze screenshotu. Pouzij pouze hodnoty, ktere jsou citelne v plnem zdroji nebo uz jsou strukturovane v `src/data/ppc.js`.

## 8. Spolecna pravidla pro thumbnail a lightbox

- Thumbnail zachovava puvodni pomer stran a ukazuje kompletni smysluplny obsah.
- Fullscreen/lightbox vzdy pouziva plny asset, ne `-thumb.png`.
- Obraz se po otevreni centruje a vejde do viewportu bez orezu; u sirokych tabulek a grafu je mozne scrollovani nebo otevreni originalu.
- Zadne `object-fit: cover` pro datove screenshoty, tabulky nebo grafy.
- Zavreni funguje tlacitkem, klikem na backdrop a klavesou Escape. Po zavreni se focus vrati na puvodni trigger.
- Otestuj, ze lightbox neprebira rozbity `href`, neukazuje 404 a assety jsou soucasti produkcniho buildu.

## 9. QA a akceptacni kriteria

Otestuj alespon viewporty 1440 x 900, 1280 x 720 a 390 x 844.

Hotovo je tehdy, kdyz:

- budget komunikuje presah vecne a neutralne, bez dominantni cervene;
- `+61,3 % YoY` u marketingovych nakladu je citelny badge, ne progress bar;
- Web Health neobsahuje zadne sloupcove grafy ani prazdne misto po nich;
- kazdy Behavior Trend ma pristupny tooltip s definici a vypoctem;
- AI Max ma mensi thumbnail, ale v detailu se zobrazi cely original;
- vsechny ctyri Karsa vizualy maji kompletni tituly, legendy, osy a data pred i po rozkliknuti;
- doprovodne Karsa texty jsou klientske, vecne a navazane na konkretni graf;
- zadny screenshot neni deformovany, necitelny nebo orezany pres podstatny obsah;
- `pnpm run build` projde bez chyby;
- probehne vizualni kontrola lokalniho buildu na desktopu i mobilu.

## Implementacni poznamka

Pracuj s aktualnim stavem repozitare a nevracej cizi rozpracovane zmeny. Pred upravou assetu si over, zda originalni prezentace nebo plne slidy skutecne existuji. Referencni screenshot `karsa-ai-crops.png` ukazuje chybu soucasneho vystupu, neni vhodnym zdrojem pro rekonstrukci chybejicich pixelu.

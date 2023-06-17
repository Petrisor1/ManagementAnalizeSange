const genereazaRecomandari = (rezultat) => {
    let recomandare = '';
    switch (rezultat.nume_test) {
      case 'HEMOGLOBINA (HGB)':
        if (rezultat.valoare_rezultat < rezultat.valoare_minima) {
          recomandare = 'Nivelul hemoglobinei este prea scăzut, ceea ce poate indica anemie. Consumul de alimente bogate în fier, cum ar fi carnea roșie, spanacul sau lintea, poate ajuta la creșterea nivelului de hemoglobină.';
        } else if (rezultat.valoare_rezultat > rezultat.valoare_maxima) {
          recomandare = 'Nivelul hemoglobinei este prea înalt, ceea ce poate indica diverse condiții, inclusiv policitemie. Este important să discutați această situație cu medicul dumneavoastră.';
        }
        break;
      case 'GLUCOZA SERICA (GLICEMIE)':
        if (rezultat.valoare_rezultat < rezultat.valoare_minima) {
          recomandare = 'Glicemia scăzută poate fi o problemă, mai ales dacă prezentați simptome precum tremur, transpirații, confuzie sau palpitații. Mâncați mese regulate pe parcursul zilei și asigurați-vă că aveți o dietă echilibrată.';
        } else if (rezultat.valoare_rezultat > rezultat.valoare_maxima) {
          recomandare = 'Glicemia crescută poate indica diabet. Este important să discutați această situație cu medicul dumneavoastră. Încercați să mențineți o dietă echilibrată și să faceți exerciții fizice regulate.';
        }
        break;
      case 'NUMAR DE ERITROCITE (RBC)':
        recomandare="Valorile scăzute ale acestor teste pot indica anemie. Încercați să consumați alimente bogate în fier și vitamina B12, cum ar fi carnea de vită, pui, pește, ouă, leguminoase, fructe de mare și verdeață. Dacă valorile sunt prea ridicate, este important să vă hidratați corespunzător și să evitați fumatul. Consultați un medic dacă aveți simptome cum ar fi oboseală, dificultăți de respirație sau piele palidă."
        break;
      case 'VOLUMUL MEDIU ERITROCITAR (MCV)':
        recomandare="Un MCV crescut poate indica anemie megaloblastică sau alcoolism, iar un MCV scăzut poate indica anemie prin deficit de fier. În caz de anemie, o dietă bogată în fier și vitamina B12 poate fi utilă. În caz de alcoolism, este recomandat să se reducă consumul de alcool."
       break;
       case 'HEMOGLOBINA ERITROCITARA MEDIE (MCH)':
        recomandare="Valori crescute pot indica anemie megaloblastică, iar valori scăzute pot indica anemie prin deficit de fier. O dietă echilibrată bogată în fier și vitamina B12 poate fi utilă în ambele situații."
        break;
        case 'CONCENTRATIA MEDIE A HEMOGLOBINEI ERITROCITARE (MCHC)':
            recomandare="Valori crescute pot indica sferocitoză ereditară, iar valori scăzute pot indica anemie prin deficit de fier sau talasemie. Consultați medicul pentru recomandări personalizate în funcție de cauza exactă a modificărilor MCHC."
        break;
        case 'LARGIMEA DISTRIBUTIEI ERITROCITARE / COEFICIENT VARIATIE (RDW)':
            recomandare="Un RDW crescut poate indica o varietate de afecțiuni, inclusiv anemie, deficiențe nutriționale sau boli cronice. Consultați medicul dumneavoastră pentru recomandări specifice în funcție de cauza modificării RDW."
        break;
        case 'NUMAR DE LEUCOCITE (WBC)':
            recomandare="Un număr crescut de leucocite poate indica o infecție sau o inflamație în corp, iar un număr scăzut poate indica un sistem imunitar slăbit. În ambele situații, este important să aveți un stil de viață sănătos și să urmați recomandările medicului dumneavoastră."
        break;
        case 'PROCENTUL DE NEUTROFILE (NEUT%)':
            recomandare="Un procent crescut de neutrofile poate indica o infecție bacteriană, iar un procent scăzut poate indica un sistem imunitar slăbit sau o infecție virală. În ambele situații, este important să aveți un stil de viață sănătos și să urmați recomandările medicului dumneavoastră."
        break;
        case 'PROCENTUL DE EOZINOFILE (EOS%)':
            recomandare="Un procent crescut de eozinofile poate indica o reacție alergică sau o infecție parazitară, iar un procent scăzut poate indica stres sau o infecție acută. În caz de reacție alergică, evitați alergenul dacă este posibil. În caz de infecție parazitară, urmați tratamentul prescris de medicul dumneavoastră."
        break;
        case 'PROCENTUL DE BAZOFILE (BAS%)':
            recomandare="Un procent crescut de bazofile poate indica o reacție alergică, leucemie mieloidă cronică sau inflamație. Un procent scăzut poate fi rezultatul unei infecții acute sau a unui răspuns la stres. În cazul unei reacții alergice, evitați alergenul dacă este posibil. În cazul unei afecțiuni medice precum leucemia mieloidă cronică sau inflamația, este important să urmați recomandările și tratamentul medicului dumneavoastră."
        break;
        case 'PROCENTUL DE LIMFOCITE (LYM%)':
            recomandare="Un procent crescut de limfocite poate indica o infecție virală, leucemie limfocitară cronică sau limfom, iar un procent scăzut poate indica stres sever, lupus, infecție HIV sau efecte secundare ale chimioterapiei. Este important să urmați recomandările medicului dumneavoastră pentru a aborda aceste probleme de sănătate."
        break;
        case 'PROCENTUL DE MONOCITE (MON%)':
            recomandare="Un procent crescut de monocite poate indica o infecție sau inflamație, lupus, sarcoidoză, sau boală inflamatorie intestinală. Un procent scăzut poate fi rezultatul unei infecții severe sau a stresului. În ambele cazuri, este important să aveți un stil de viață sănătos și să urmați recomandările medicului dumneavoastră."
            break;
        case 'NUMAR DE NEUTROFILE (NEUT)':
            recomandare="Un număr crescut de neutrofile poate indica o infecție bacteriană sau inflamație, iar un număr scăzut poate indica un sistem imunitar slăbit. În ambele situații, este important să aveți un stil de viață sănătos și să urmați recomandările medicului dumneavoastră."
            break;
        case 'NUMAR DE EOZINOFILE (EOS)':
            recomandare="Un număr crescut de eozinofile poate indica o reacție alergică, infecție parazitară sau afecțiuni dermatologice. Un număr scăzut poate indica stres sau o infecție acută. În caz de reacție alergică, evitați alergenul dacă este posibil. În caz de infecție parazitară, urmați tratamentul prescris de medicul dumneavoastră."
            break;
        case 'NUMAR DE BAZOFILE (BAS)':
            recomandare="Un număr crescut de bazofile poate indica o reacție alergică, leucemie mieloidă cronică sau inflamație. Un număr scăzut poate fi rezultatul unei infecții acute sau a unui răspuns la stres. În cazul unei reacții alergice, evitați alergenul dacă este posibil. În cazul unei afecțiuni medice precum leucemia mieloidă cronică sau inflamația, este important să urmați recomandările și tratamentul medicului dumneavoastră."
            break;
        case 'NUMAR DE LIMFOCITE (LYM)':
            recomandare="Un număr crescut de limfocite poate indica o infecție virală, leucemie limfocitară cronică sau limfom, iar un număr scăzut poate indica stres sever, lupus, infecție HIV sau efecte secundare ale chimioterapiei. Este important să urmați recomandările medicului dumneavoastră pentru a aborda aceste probleme de sănătate."
            break;
        case 'NUMAR DE MONOCITE (MON)':
            recomandare="Un număr crescut de monocite poate indica o infecție sau inflamație, lupus, sarcoidoză, sau boală inflamatorie intestinală. Un număr scăzut poate fi rezultatul unei infecții severe sau a stresului. În ambele cazuri, este important să aveți un stil de viață sănătos și să urmați recomandările medicului dumneavoastră."
            break;
        case 'NUMAR DE TROMBOCITE (PLT)':
            recomandare="Un număr crescut de trombocite poate fi asociat cu cancer, anemie, inflamație, sau după o intervenție chirurgicală sau splenectomie, iar un număr scăzut poate indica o afecțiune a măduvei osoase, o infecție virală, sau efecte secundare ale chimioterapiei. În ambele situații, urmați recomandările medicului dumneavoastră."
            break;  
        case 'VOLUMUL MEDIU PLACHETAR (MPV)':
            recomandare="Un MPV crescut poate indica o afecțiune a măduvei osoase, o infecție sau inflamație, iar un MPV scăzut poate indica o afecțiune genetică. În ambele situații, urmați recomandările medicului dumneavoastră."
        break;
        case 'DISTRIBUTIA PLACHETELOR(TROMBOCITELOR) (PDW)':
            recomandare="Un PDW crescut poate indica o varietate de afecțiuni, inclusiv anemie, deficiențe nutriționale sau boli cronice. Consultați medicul dumneavoastră pentru recomandările specifice în funcție de cauza modificării PDW."
            break;
        case 'VSH':
            recomandare="Un VSH crescut poate indica o inflamație în corp, cauzată de o varietate de condiții, inclusiv infecții, cancer și boli autoimune. Un VSH scăzut poate indica o afecțiune autoimună sau un număr scăzut de globule roșii (anemie). În ambele cazuri, este important să urmați recomandările medicului dumneavoastră."
            break;
        case 'FIBRINOGEN':
            recomandare="Un nivel crescut de fibrinogen poate indica o inflamație în corp, o infecție, sau poate fi un semn de o afecțiune cardiacă sau un risc crescut de formare a cheagurilor de sânge. Un nivel scăzut de fibrinogen poate indica o problemă de coagulare a sângelui. În ambele cazuri, urmați recomandările medicului dumneavoastră."
            break; 
        case 'ACID URIC SERIC':
            recomandare="Un nivel crescut de acid uric poate indica gută, insuficiență renală, consum excesiv de alcool, sau poate fi un efect secundar al unor medicamente. Un nivel scăzut de acid uric poate indica o problemă renală, o dietă săracă în purine, sau poate fi un efect secundar al unor medicamente. În caz de gută, o dietă cu conținut scăzut de purine poate ajuta, iar în cazul problemelor renale, este important să urmați recomandările medicului dumneavoastră."
            break;
        case 'ALANINAMINOTRANSFERAZA (ALT/GPT/TGP)':
            recomandare=" Enzimele hepatice ridicate pot fi un semn de inflamație sau daune la nivelul ficatului. Dacă nivelurile dumneavoastră sunt ridicate, este important să evitați alcoolul, să mâncați o dietă sănătoasă, să faceți exerciții fizice regulate și să evitați medicamentele care pot cauza daune ficatului."
            break;
        case 'ASPARTATAMINOTRANSFERAZA (GOT/AST/TGO)':
            recomandare="Asemenea ALT, nivelurile ridicate de AST pot indica probleme la nivelul ficatului. Recomandările pentru gestionarea acestor niveluri sunt similare: limitarea consumului de alcool, menținerea unei diete sănătoase, efectuarea de exerciții fizice regulate și evitarea medicamentelor hepatotoxice."
            break;
        case 'CALCIU SERIC':
            recomandare="Nivelele anormale de calciu pot fi un semn de probleme de sănătate precum problemele paratiroide, renale sau osoase. Este important să mențineți o dietă echilibrată, să vă hidratați corespunzător și să urmați recomandările medicului pentru gestionarea nivelurilor de calciu."
            break;
        case 'COLESTEROL TOTAL':
            recomandare="Nivelurile ridicate de colesterol pot crește riscul de boli de inimă. Este important să aveți o dietă echilibrată, să faceți exerciții fizice regulate, să evitați fumatul și să mențineți o greutate sănătoasă."
            break;
        case 'COLESTEROL HDL':
            recomandare="Acesta este cunoscut ca 'colesterolul bun'. Nivelele ridicate de HDL pot ajuta la protejarea împotriva bolilor de inimă. Pentru a crește nivelul de HDL, încercați să mâncați o dietă sănătoasă, să faceți exerciții fizice regulate, să evitați fumatul și să mențineți o greutate sănătoasă."
            break;
        case 'LDL COLESTEROL':
            recomandare=" Acesta este 'colesterolul rău', iar nivelurile ridicate pot crește riscul de boli de inimă. Evitați grăsimile saturate și trans, mâncați multe fructe și legume, faceți exerciții fizice regulate și evitați fumatul pentru a menține nivelurile de LDL sub control."
            break; 
        case 'RATA ESTIMATA A FILTRARII GLOMEMURATE (EGFR)':
            break; 
        case 'TRIGLICERIDE':
            recomandare="Nivelurile ridicate de trigliceride pot crește riscul de boli de inimă. Pentru a menține un nivel sănătos de trigliceride, încercați să reduceți consumul de zahăr și grăsimi saturate, mâncați mai multe proteine și fibre, și faceți exerciții fizice regulate."
            break; 
        case 'PH URINAR':
            recomandare="Un pH urinar anormal poate fi un semn de diverse probleme de sănătate, cum ar fi infecții ale tractului urinar sau calculi renale. Pentru a menține un pH urinar normal, consumați o dietă echilibrată, beți multă apă și urmați recomandările medicului dumneavoastră."
            break; 
        case 'DENSITATE URINARA':
            recomandare="O densitate urinară mare poate indica deshidratare, în timp ce o densitate scăzută poate indica un consum excesiv de lichide sau o posibilă problemă renală. Mențineți-vă bine hidratat și urmați recomandările medicului dumneavoastră."
            break; 
        case 'LEUCOCIT ESTERAZA':
            recomandare="Prezența leucocit esterazei în urină poate indica o infecție urinară. Beți multă apă, evitați iritanții vezicii urinare (cum ar fi cafeaua și alcoolul), și urmați recomandările medicului dumneavoastră."
            break; 
        case 'BILIRUBINA':
            recomandare="Nivelurile ridicate de bilirubină pot indica probleme la nivelul ficatului sau ale căilor biliare. Mențineți o dietă sănătoasă, beți multă apă, evitați alcoolul și urmați recomandările medicului dumneavoastră."
            break; 
        case 'UROBILINOGEN':
            recomandare=" Urobilinogenul crescut în urină poate indica o problemă la nivelul ficatului sau o infecție. Încercați să mențineți o dietă sănătoasă, beți multă apă și urmați recomandările medicului dumneavoastră."
            break;
        case 'GLUCOZA':
            recomandare="Prezența glucozei în urină poate indica diabet sau alte probleme de sănătate. Mențineți un stil de viață sănătos, mâncați o dietă echilibrată, faceți exerciții fizice regulate și urmați recomandările medicului dumneavoastră în privința gestionării nivelului de zahăr din sânge."
            break;
        case 'PROTEINE':
            recomandare="Prezența proteinelor în urină poate fi un semn al unor probleme renale. Este important să mențineți un stil de viață sănătos, inclusiv o dietă echilibrată și exerciții fizice regulate, să vă controlați tensiunea arterială și nivelul de zahăr din sânge și să urmați recomandările medicului dumneavoastră."
            break;         
        case 'CORPI CETONICI':
            recomandare="Prezența corpilor cetonici în urină poate indica diabet necontrolat, foame sau o dietă foarte scăzută în carbohidrați. Dacă aveți diabet, este important să vă monitorizați nivelul de zahăr din sânge și să urmați planul de tratament prescris de medicul dumneavoastră. Dacă nu aveți diabet, ar trebui să mâncați regulat și să vă asigurați că aveți un aport adecvat de carbohidrați."
            break;
        case 'NITRITI':
            recomandare="Prezența nitriților în urină este adesea un semn al unei infecții urinare. Dacă aveți o infecție urinară, ar trebui să beți multă apă și să urmați tratamentul prescris de medicul dumneavoastră. Preveniți infecțiile urinare prin hidratare adecvată și urinare regulată."
            break;
        case 'TSH (HORMON DE STIMULARE TIROIDIANA)':
            recomandare="Nivelele ridicate de TSH pot indica hipotiroidism, în timp ce nivelurile scăzute pot indica hipertiroidism. Recomandări pentru gestionarea nivelurilor de TSH includ urmarea unui regim alimentar echilibrat, practicarea de exerciții fizice regulate, menținerea unei greutăți sănătoase, și urmarea recomandărilor medicului pentru orice tratament medicamentos necesar."
            break;

      default:
        recomandare = 'Valorile sunt în limite normale.';
        break;
    }
    return recomandare;
  }
  export default genereazaRecomandari;
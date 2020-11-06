import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { JobItemStyles } from '../styles'

export const JobItem = (props) => {
    console.log("JobItem -> props", props)
    return(
        <TouchableOpacity style = {JobItemStyles.container}
            onPress = {props.onSelect}
        >
            <Text style = {JobItemStyles.textTitle}>{props.item.title}</Text>
            <Text style = {JobItemStyles.textLocation}>{props.item.location}/{props.item.type}</Text>
        </TouchableOpacity>
    )
}









// company: "Academic Work"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcldMIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ab88a4a0478cb8fd92976260b66088e5e56c0781/AW_logo_main_version_RGB.png"
// company_url: "https://www.academicwork.se/"
// created_at: "Fri Oct 09 13:48:54 UTC 2020"
// description: "<p><em>Group IT på Academic Work gör just nu något extremt spännande – vi bygger en helt egen plattform från scratch. För att lyckas med det på bästa sätt så jobbar vi med den senaste tech-stacken och de duktigaste medarbetarna och nu expanderar vi teamet för att säkerställa att vi tar oss till målet och att vi fortsätter ligga först när det gäller digitalisering i vår bransch!</em></p>↵<p><strong>Om tjänsten</strong></p>↵<p>Som fullstackutvecklare hos oss blir du en del av ett riktigt bra team som alla jobbar mot samma mål; att bygga en plattform som ligger i framkant och som vi alla kan skryta med att vi varit med och byggt om några år. Vi tror att samarbete där alla bidrar med sina idéer och tankar är det bästa sättet så därför jobbar vi med mobb-programmering vilket innebär att du hos oss jobbar med utveckling i en dynamisk och kreativ miljö, där det aldrig blir tråkigt eller slentrian. Eftersom vi bygger från grunden så finns inget legacy att förhålla sig till och det gör också att frasen ”få vara med och bidra och vara kreativ” inte bara är en klyscha som passar bra i annonsen hos oss, utan faktiskt verklighet. Förutom det så jobbar du hos oss med branschens bästa tech leads, arkitekter och utvecklare!</p>↵<p>Exempel på teknik som teamet idag har valt att jobba med är microservices, event driven architecture, containers, infrastructure-as-code och Linux. Vi arbetar gärna med OpenSource och programmeringsspråk varierar men NodeJS, Golang eller .Net core är språk de flesta hos oss känner sig mest bekväma med.</p>↵<p>Group IT är idag runt 50 personer (runt 30 jobbar med produktutveckling varav 20 på utvecklingssidan) och sitter på Hälsingegatan i Stockholm. Du kommer att tillhöra utvecklingsteamet och rapportera till Head of System Development men arbetar dagligen i nära samarbete med tech leads och product managers och i dynamiska mobbar där du själv kommer kunna vara med och påverka vad du vill fokusera på framåt. Hos oss är stämningen familjär och trevlig och förutom att vi bygger riktigt bra saker tillsammans så har vi också väldigt kul om dagarna!</p>↵<p>Vill du veta mer om hur det är att jobba internt på Academic Work? På <a href="https://www.academicwork.se/om-oss/karriar-hos-oss">Jobba Hos Oss</a> får du träffa några av våra medarbetare, läsa om vad vi värderar högt samt se bilder och filmer som beskriver vår värld. <a href="https://www.academicwork.se/om-oss/karriar-hos-oss">Klicka här!</a> Du kan också spana in vårt <a href="https://www.instagram.com/academicwork/">Instagramkonto</a> och följ med bakom kulisserna på våra 16 kontor över hela Sverige. Varmt välkommen!</p>↵<p><strong>Arbetsuppgifter</strong></p>↵<p>Som Fullstack-utvecklare kommer dina främsta arbetsuppgifter vara att:</p>↵<ul>↵<li>arbeta med fullstack-utveckling genom att skriva bra kod och robusta tekniska lösningar samt leverera funktionalitet och värdeadderande lösningar till våra slutanvändare</li>↵<li>alltid ha ett nära samarbete och dialog med dina kollegor (tech leads, utvecklare, product managers, UX, platform)</li>↵<li>löpande testa och utvärdera våra applikationer och tekniska lösningar och arbeta för att alltid förbättra dem.</li>↵</ul>↵<p>Tjänsten passar dig som triggas av att bygga från grunden i en dynamisk miljö där du får stor frihet i att själv komma med idéer och som trivs med att arbeta i nära samarbete med ditt team.</p>↵<p><strong>Vi söker dig som</strong></p>↵<ul>↵<li>Är up-to-date med den senaste tekniken inom utveckling (fullstack) och arkitektur</li>↵<li>Erfarenhet av JavaScript/TypeScript/NodeJS.</li>↵<li>Har tidigare erfarenhet/kunskap om SQL/NoSQL-databaser.</li>↵<li>Har goda kunskaper i svenska och engelska i både tal och skrift eftersom vi arbetar med mobbprogrammering där arbetsspråket i mobben är svenska</li>↵</ul>↵<p>Om du har arbetat med mobbutveckling och redan vet att du trivs med det så är det ett plus i kanten, men inget krav. En examen från högskola/universitet inom systemutveckling kan också vara användbart, men vi ser också att du kan ha fått dina kunskaper och färdigheter på annat sätt.</p>↵<p>Vi erbjuder en kreativ miljö med stor frihet att välja teknik tillsammans med ditt team eller den mobb du arbetar i och det kräver att du är en lagspelare som triggas av att arbeta kreativt och flexibelt i nära samarbete och dialog med andra. Samtidigt är det såklart också viktigt att du håller ögat på målet och säkerställer att de val vi gör hela tiden tar oss närmre slutmålet. Vi är rätt säkra på att vi har ett vinnande arbetssätt (det verkar som det hittills), men vi kommer alltid vilja att du bidrar med din kunskap och expertis kring nya tekniker, nya arbetssätt och idéer för att utmana oss och se om vi kan bli ännu bättre. Eftersom vi inte bara bygger en helt egen plattform från grunden utan också ser till att ha roligt tillsammans medan vi gör det så vill vi självklart att du också är en person som bidrar med energi och engagemang!</p>↵<p><strong>ÖVRIG INFORMATION</strong></p>↵<ul>↵<li>↵<p>Start: Enlig överenskommelse</p>↵</li>↵<li>↵<p>Omfattning: Heltid, tillsvidare med inledande provanställning</p>↵</li>↵<li>↵<p>Placering: Group IT, Hälsingegatan, Stockholm (här finns vårt trevliga kontor, men är du rätt person så är vi öppna för arbete på distans, även om vi tycker det skulle vara absolut roligast att få träffa dig IRL ibland)</p>↵</li>↵<li>↵<p>Kontaktuppgifter: Elin Karman (Recruitment Consultant), <a href="elin.karman@academicwork.se">elin.karman@academicwork.se</a></p>↵</li>↵<li>↵<p>Sök tjänsten genom att klicka på Ansök via annan site nedan. Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals och intervjufasen. Observera att denna ansökan sker via en extern site vilket gör att den inte kommer att synas under ”mina sidor” på din profil. Rekryteringsprocessen består av kompetensbaserade intervjuer, tester samt arbetsprov.</p>↵</li>↵<li>↵<p>Vi tar inte emot ansökningar via mail men har du specifika frågor kring tjänsten besvaras dessa på <a href="recruitmentstockholmsouth@academicwork.se">recruitmentstockholmsouth@academicwork.se</a> under kontorstid. Skriv annonstiteln i rubriken och kopiera gärna in länken till annonsen i ditt mail. För generella funderingar kring din ansökan/vår rekryteringsprocess finns vi ofta tillgängliga i chatten här på webben under vardagar så hör gärna av dig där!</p>↵</li>↵</ul>↵<p><strong>Information om företaget</strong></p>↵<p>Det finns IT-avdelningar och så finns det IT-avdelningar. Och så finns det Group IT på Academic Work. Genom åren har vi kommit att bli något ganska unikt, mycket tack vare att vi redan från början haft ett stort fokus på att ligga i framkant i vår bransch när det kommer till digitalisering. Academic Work satsar mycket på IT och hos oss får du arbeta med den senaste teknologin inom områden där du har möjlighet att påverka utveckling av både produkter och processer. Vår IT-strategi är mycket ovanlig och något som vi är extremt stolta över!</p>↵<p>Academic Work är Home of the young professionals. Vi rekryterar och hyr ut young professionals – studenter och akademiker som befinner sig i början av karriären. Academic Work startades av tre studenter som levde sin egen affärsidé. Nu är vi en internationell verksamhet där young professionals påbörjar sina karriärer, varje dag. Läs mer på <a href="https://www.academicwork.se/">www.academicwork.se</a>.</p>↵"
// how_to_apply: "<p><a href="https://jobs.academicwork.se/annons/fullstackutvecklare-till-group-it-pa-academic-work/15045291">https://jobs.academicwork.se/annons/fullstackutvecklare-till-group-it-pa-academic-work/15045291</a></p>↵"
// id: "18acad85-6cae-4e3d-8318-f87c821c87b1"
// location: "Stockholm"
// title: "Fullstackutvecklare"
// type: "Full Time"
// url: "https://jobs.github.com/positions/18acad85-6cae-4e3d-8318-f87c821c87b1"
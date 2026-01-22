# Automatisering & publicering

Detta projekt är skapat i kursen Front-end baserad webbutveckling på Mittuniversitetet. Syftet med webbplatsen är att öva på att automatisera publiceringen av webbplatser med verktyg som Node JS och Vite. Webbplatsen finns tillgänglig vid: 

## Arbetsprocess:
Denna webbplats har skapats med hjälp av Node JS och Vite. Eftersom Node JS redan fanns installerat på datorn skapades projektet enkelt genom att konfigurera Vite med hjälp datorns terminal.  

Vid konfigurationen av Vite installerades öven stöd för Sass, trots att Sass inte ska användas i detta projekt. Senare i projektet installerades även ett NPM paket för komprimering av bilder, Vite Image Optimizer. Detta konfigurerades även i filen vite.config. 

I denna fas av utvecklingsarbetet versionhanterades även projektet med hjälp av Git. Förutom main-branchen lades även dev-branch till för fortsatt utvecklingsarbete. 

Webbplatsen är utvecklad i HTML, CSS och en mindre mängd JavaScript. Inledningsvis skapades grundläggande layout i index.html, därefter utökades webbplatsen med ytterligare två undersidor, ”bilder.html” och ”arbetsprocessen.html”. Dessa undersidor konfigurerades även i vite.config. 

Samtliga sidor uppdaterades därefter med relevant innehåll, enhetlig design och konsekvent funktionalitet. Ett  färgschema implementerades med stöd för användaren att lagra önskat färgschema i Localstorage. 

Avslutningsvis slogs dev-branchen samman med main-branchen. Vite iptimerade projektets filer och genererade en komprimerad version av webbplatsen i en separat mapp. Därefter publicerades filerna till GitHub med hjälp av git push. Webbplatsen är sedan publicerad med hjälp av netlify. 
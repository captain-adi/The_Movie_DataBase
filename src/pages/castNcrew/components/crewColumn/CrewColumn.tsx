import type { ICreditsResponse } from "@/pages/detailedpage/components/contentWrapper/components/seriesCast/type";
import CrewGroup from "./components/crewGroup/CrewGroup";

function CrewColumn({ data }: { data: ICreditsResponse["crew"] }) {
  const {
    art,
    camera,
    editing,
    costumeAndMakeup,
    crew,
    directing,
    production,
    sound,
    visualEffects,
    writing,
  } = data.reduce(
    (
      acc: {
        art: ICreditsResponse["crew"];
        camera: ICreditsResponse["crew"];
        editing: ICreditsResponse["crew"];
        costumeAndMakeup: ICreditsResponse["crew"];
        crew: ICreditsResponse["crew"];
        directing: ICreditsResponse["crew"];
        production: ICreditsResponse["crew"];
        sound: ICreditsResponse["crew"];
        visualEffects: ICreditsResponse["crew"];
        writing: ICreditsResponse["crew"];
      },
      person,
    ) => {
      if (person.department === "Art") {
        acc.art.push(person);
      } else if (person.department === "Camera") {
        acc.camera.push(person);
      } else if (person.department === "Editing") {
        acc.editing.push(person);
      } else if (person.department === "Costume & Make-Up") {
        acc.costumeAndMakeup.push(person);
      } else if (person.department === "Directing") {
        acc.directing.push(person);
      } else if (person.department === "Crew") {
        acc.crew.push(person);
      } else if (person.department === "Production") {
        acc.production.push(person);
      } else if (person.department === "Sound") {
        acc.sound.push(person);
      } else if (person.department === "Visual Effects") {
        acc.visualEffects.push(person);
      } else if (person.department === "Writing") {
        acc.writing.push(person);
      }
      return acc;
    },
    {
      art: [],
      camera: [],
      editing: [],
      costumeAndMakeup: [],
      crew: [],
      directing: [],
      production: [],
      sound: [],
      visualEffects: [],
      writing: [],
    },
  );

  return (
    <div className="w-135">
      <h2 className="font-semibold text-lg mb-4">
        Crew <span className="opacity-60">{data.length}</span>
      </h2>

      <div className="space-y-8">
        <CrewGroup title="Art Department" data={art} />
        <CrewGroup title="Camera" data={camera} />
        <CrewGroup title="Editing" data={editing} />
        <CrewGroup title="Costume & Make-Up" data={costumeAndMakeup} />
        <CrewGroup title="Directing" data={directing} />
        <CrewGroup title="Crew" data={crew} />
        <CrewGroup title="Production" data={production} />
        <CrewGroup title="Sound" data={sound} />
        <CrewGroup title="Visual Effects" data={visualEffects} />
        <CrewGroup title="Writing" data={writing} />
      </div>
    </div>
  );
}
export default CrewColumn;

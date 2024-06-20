import React from "react";
import { Frontend_skill,Skill_data } from "./constants";
import SkillsDataProvider from "./SkillsDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 md:py-14 lg:py-20"
      style={{ transform: "scale(0.9)" }}
    >
        <SkillText/>
     <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

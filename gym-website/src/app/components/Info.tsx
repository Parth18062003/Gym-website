import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-24 lg:px-48 xl:px-96 xl:mt-[-5rem]">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">
          About the Exercise
        </h3>
        <p>
          The barbell curl is a classic and effective bicep exercise that
          targets the muscles in the front of your upper arms, specifically the
          biceps brachii. Barbell curls into your workout routine can help
          develop and strengthen your biceps, contributing to overall arm
          strength and aesthetics
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">Target area</h3>
        <p>Biceps brachii and forearm muscles</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">
          Level for difficulty
        </h3>
        <p>Beginner friendly</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">Number of set</h3>
        <p>3</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">Duration</h3>
        <p>20 minutes</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">Calories burn</h3>
        <p>150 cal</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">
          Equipment needed
        </h3>
        <p>Barbell</p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">
          Instruction to perform
        </h3>
        <ul className="list-disc">
          <li>Stand up straight with your feet shoulder-width apart.</li>
          <li>
            Hold a barbell with a shoulder-width grip, palms facing forward (an
            underhand grip).
          </li>
          <li>Your hands should be positioned slightly wider than your shoulders.</li>
          <li>Keep your wrists straight and aligned with your forearms.</li>
          <li>Maintain a straight back, chest up, and shoulders back.</li>
          <li>
            While keeping your upper arms stationary, exhale and curl the
            barbell towards your shoulders by flexing your elbows.
          </li>
          <li>Focus on contracting your biceps throughout the movement.</li>
          <li>
            Inhale and slowly lower the barbell back to the starting position
            with controlled movement.
          </li>
          <li>
            Maintain tension on the biceps during the descent; do not let the
            weight drop.
          </li>
          <li>Repeat the movement for the desired number of repetitions.</li>
          <li>
            Exhale during the lifting (concentric) phase and inhale during the
            lowering (eccentric) phase.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-[#100D81]">Tips</h3>
        <ul className="list-disc">
          <li>Avoid using momentum by keeping your body still. Focus on isolating the biceps.</li>
          <li>Use a weight that allows you to maintain proper form and control throughout the exercise.</li>
          <li>Ensure a full range of motion, allowing your arms to fully extend at the bottom and flex at the top.</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

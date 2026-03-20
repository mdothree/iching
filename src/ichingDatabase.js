/**
 * I Ching Hexagram Database
 * Complete 64 hexagrams with interpretations
 */

export const hexagrams = [
  {
    id: 1,
    name: "Creative",
    chinese: "乾",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Heaven" },
    judgment: "Creative judgment",
    keywords: ["creation", "strength", "power", "pure yang"],
    rulingLine: "The dragon hides in the deep. The great personinitiates and completes.",
    lines: [
      "Hidden dragon. Do not act.",
      "Dragon appears in the field. It furthers one to see the great person.",
      "All day long the dragon is in the field. Misfortune.",
      "Dragon leaps in the depths. No blame.",
      "Flying dragon in the heavens. It furthers one to see the great person.",
      "Proud dragon exceeds. Regret."
    ],
    upper: {
      brief: "Pure yang energy and creative power.",
      meaning: "The Creative is the supreme success. It represents pure yang energy, creativity, and the power of creation. This is a time of great strength and potential.",
      guidance: "Act with confidence. Your creative power is at its peak. Lead with strength and integrity."
    },
    lower: {
      brief: "Weakness and misuse of power.",
      meaning: "The Creative reversed suggests arrogance, abuse of power, or stagnation. Your strength may be misdirected.",
      guidance: "Humble yourself. Power must be used wisely. Reconsider your approach."
    },
    image: "The movement of heaven is full of power. Thus the superior person makes himself strong and untiring.",
    nucleus: ["initiative", "strength", "success", "purity"],
    element: "Fire",
    astrology: "Aries, Leo, Sagittarius"
  },
  {
    id: 2,
    name: "Receptive",
    chinese: "坤",
    symbol: "☷",
    trigrams: { upper: "Earth", lower: "Earth" },
    judgment: "Receptive judgment",
    keywords: ["reception", "devotion", "patience", "pure yin"],
    rulingLine: "The great personinitiates and completes.",
    lines: [
      "When frost comes, then ice arrives.",
      "Straight, square, great. Without limitation, the king on firm ground. It furthers.",
      "Hidden lines. One is able to remain perseverant.",
      "Closed graph. No blame.",
      "Yellow graph is most central and correct. Auspicious.",
      "Dragons fight in the depths. Blood is black and yellow."
    ],
    upper: {
      brief: "Pure yin energy and receptive power.",
      meaning: "The Receptive represents pure yin energy, receptivity, and devotion. Success comes through following and supporting, not leading.",
      guidance: "Receive with grace. Support others' visions. Patience and devotion bring success."
    },
    lower: {
      brief: "Stagnation and resistance.",
      meaning: "The Receptive reversed suggests being too passive, resistance to necessary change, or inability to receive.",
      guidance: "Stop resisting. Open yourself to change. Receptivity requires active participation."
    },
    image: "The earth's condition is receptive devotion. Thus the superior person who has breadth of character carries things through.",
    nucleus: ["receptivity", "devotion", "patience", "submissiveness"],
    element: "Earth",
    astrology: "Taurus, Virgo, Capricorn"
  },
  {
    id: 3,
    name: "Difficulty",
    chinese: "屯",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Water" },
    judgment: "Difficulty judgment",
    keywords: ["difficulty", "beginning", "confusion", "sprouting"],
    rulingLine: "Nine in the fifth place brings good fortune. No blame.",
    lines: [
      "Hesitation and inconvenience. It furthers one to have somewhere to go. It furthers one to remain perseverant.",
      "Difficult and tangled. It furthers one to be perseverant and firm.",
      "Hunting for game. Nothing is caught. One is covered with graph. Fortune.",
      "Turn back, do not go forward. Turn back, it furthers one to master the strong.",
      "Give yourself to difficulties. No blame. Perseverance brings good fortune.",
      "Red graph is most central and correct. Auspicious."
    ],
    upper: {
      brief: "Obstacles at the beginning of a journey.",
      meaning: "Difficulty at the beginning. Like seeds struggling to sprout, obstacles must be overcome before progress is possible.",
      guidance: "Persevere through difficulties. The seed of success is there— nurture it patiently."
    },
    lower: {
      brief: "Overwhelmed by difficulties.",
      meaning: "Difficulty reversed suggests being overwhelmed by obstacles or giving up too soon.",
      guidance: "Don't give in to despair. Difficulties are temporary. Focus on one step at a time."
    },
    image: "Cloud and thunder: the image of Difficulty. Thus the superior person conducts matters with difficulty.",
    nucleus: ["beginnings", "obstacles", "confusion", "perseverance"],
    element: "Water",
    astrology: "Moon"
  },
  {
    id: 4,
    name: "Youth",
    chinese: "蒙",
    symbol: "☵",
    trigrams: { upper: "Mountain", lower: "Water" },
    judgment: "Youth judgment",
    keywords: ["youth", "folly", "ignorance", "education"],
    rulingLine: "Nine in the second place brings good fortune. No blame.",
    lines: [
      "To develop and not to control. One goes into graph. It furthers one to have somewhere to go.",
      "One accepts to be taught. Give instruction. There is no blame. Fortune.",
      "Woman makes an error. It is not beneficial to do anything.",
      "It is pitiable. One is confined in graph. Fortune.",
      "A child is in a pit. One must act in time. No blame.",
      "Do not beat the drums. One makes a mistake. Fortune."
    ],
    upper: {
      brief: "Youth and learning require guidance.",
      meaning: "Youth and folly must be guided by wisdom. Learning requires humility and a willing teacher.",
      guidance: "Seek instruction. Be open to learning. The student must also be willing to receive."
    },
    lower: {
      brief: "Foolish stubbornness.",
      meaning: "Youth reversed suggests refusing to learn, stubborn ignorance, or misleading others.",
      guidance: "Drop your defenses. Wisdom comes from admitting what you don't know."
    },
    image: "Spring comes issuing from the mountain: the image of Youth. Thus the superior person cultivates his character.",
    nucleus: ["education", "ignorance", "naivety", "instruction"],
    element: "Water",
    astrology: "Mercury"
  },
  {
    id: 5,
    name: "Waiting",
    chinese: "需",
    symbol: "☵",
    trigrams: { upper: "Cloud", lower: "Water" },
    judgment: "Waiting judgment",
    keywords: ["waiting", "nourishment", "patience", "cloud"],
    rulingLine: "No blame. It furthers one to have somewhere to go. Good fortune.",
    lines: [
      "One waits outside the graph. It furthers one to be perseverant in remaining. Danger.",
      "One waits inside the graph. It furthers one to master the strong. It furthers one to have somewhere to go.",
      "One waits inside the graph. Danger. No blame. One is covered with graph.",
      "It furthers one to have somewhere to go. One sits by the graph.",
      "It furthers one to have somewhere to go. It furthers one to entertain guests.",
      "One enters one's graph. It furthers one to entertain guests."
    ],
    upper: {
      brief: "Patience and nourishment before action.",
      meaning: "Waiting requires patience and nourishment. Like clouds holding rain, you must wait for the right moment.",
      guidance: "Be patient. Trust the timing. Use this time to prepare and nourish yourself."
    },
    lower: {
      brief: "Impatient and restless.",
      meaning: "Waiting reversed suggests impatience, anxiety, or forcing action before the time is right.",
      guidance: "Stop rushing. The time is not yet right. Restrain your impulses."
    },
    image: "Clouds rise over heaven: the image of Waiting. Thus the superior person eats and drinks, is content andjoyous.",
    nucleus: ["patience", "anticipation", "nourishment", "restraint"],
    element: "Water",
    astrology: "Moon"
  },
  {
    id: 6,
    name: "Conflict",
    chinese: "讼",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Cloud" },
    judgment: "Conflict judgment",
    keywords: ["conflict", "lawsuit", "dispute", "confrontation"],
    rulingLine: "If one does not win, one returns and does not go forward.",
    lines: [
      "Conflict is not yet ended.",
      "One cannot conflict. One returns and does violence. Fortune.",
      "In diet, one accepts the conflict. Good fortune.",
      "One cannot conflict. One returns and does not go forward. No blame. A string of broken jade.",
      "Conflict is most central and correct. Good fortune.",
      "By listening to the petition, one may be relieved."
    ],
    upper: {
      brief: "Conflict requires careful judgment.",
      meaning: "Conflict arises when parties stand in opposition. Careful judgment and restraint are needed to navigate disputes.",
      guidance: "Seek resolution, not victory. Consider mediation. Sometimes retreat is wisdom."
    },
    lower: {
      brief: "Stuck in endless conflict.",
      meaning: "Conflict reversed suggests prolonged disputes, stubbornness, or escalation of tensions.",
      guidance: "Let go of the fight. What are you really protecting? Peace may require compromise."
    },
    image: "Heaven and water go apart: the image of Conflict. Thus in all matters, the superior person first calculates the costs.",
    nucleus: ["dispute", "tension", "lawsuit", "opposition"],
    element: "Metal",
    astrology: "Mars"
  },
  {
    id: 7,
    name: "Army",
    chinese: "师",
    symbol: "☷",
    trigrams: { upper: "Earth", lower: "Water" },
    judgment: "Army judgment",
    keywords: ["army", "discipline", "mass", "leadership"],
    rulingLine: "In the end, good fortune comes.",
    lines: [
      "An army sets out in order. If the orders are not harmonious, the army is not well organized.",
      "In the middle of the army. Good fortune. No blame.",
      "The army may be in the field. It furthers one to be resolute.",
      "The army is in the field. No blame.",
      "The head of the army should have the turtle. No blame.",
      "The great ruler comes. It furthers one to make an announcement."
    ],
    upper: {
      brief: "Disciplined collective action.",
      meaning: "An army requires disciplined leadership and collective purpose. Order and structure bring victory.",
      guidance: "Establish order. Lead with wisdom, not force. Collective effort requires sacrifice."
    },
    lower: {
      brief: "Chaos and lack of direction.",
      meaning: "Army reversed suggests disorganization, weak leadership, or misuse of collective power.",
      guidance: "Restore order. Strong leadership is needed. Without discipline, the army disperses."
    },
    image: "In the middle of the earth is water: the image of the Army. Thus the superior person enlarges his mind so it fills the space.",
    nucleus: ["discipline", "organization", "leadership", "collective"],
    element: "Water",
    astrology: "Mars"
  },
  {
    id: 8,
    name: "Union",
    chinese: "比",
    symbol: "☷",
    trigrams: { upper: "Water", lower: "Earth" },
    judgment: "Union judgment",
    keywords: ["union", "comparison", "alliance", "harmony"],
    rulingLine: "Good fortune comes. No blame.",
    lines: [
      "There is a great person. There is a small person. The great person unites the people.",
      "The great person unites the people. The small person unites the people.",
      "One unites with the wrong people. Not blameless.",
      "One seeks union with one's own. One should not be unsettled.",
      "The king sets up the son of heaven. The great person unites the people.",
      "One cannot unite with anyone."
    ],
    upper: {
      brief: "Unity and comparison bring guidance.",
      meaning: "Union comes through comparison and choosing the right allies. Unity requires mutual respect and shared values.",
      guidance: "Seek like-minded companions. Compare your path with those who have walked it well."
    },
    lower: {
      brief: "False unity and isolation.",
      meaning: "Union reversed suggests false alliances, comparing yourself to the wrong people, or isolation.",
      guidance: "Choose your companions wisely. False unity leads to disappointment."
    },
    image: "Above the earth is water: the image of Union. Thus the superior person distinguishes things.",
    nucleus: ["union", "comparison", "alliance", "friendship"],
    element: "Water",
    astrology: "Cancer"
  },
  {
    id: 9,
    name: "Small Taming",
    chinese: "小畜",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Heaven" },
    judgment: "Small Taming judgment",
    keywords: ["taming", "restraint", "small power", "accumulation"],
    rulingLine: "The rain covers the roof. It is past.",
    lines: [
      "It furthers one to have somewhere to go. It furthers one to remain perseverant.",
      "It furthers one to have somewhere to go. It furthers one to remain perseverant.",
      "The rain falls. It furthers one to have somewhere to go. No blame.",
      "The rain is partial. One gets rid of what is above. One is free of worry.",
      "One takes a companion. No blame.",
      "The moon is almost full. One's own side is winning."
    ],
    upper: {
      brief: "Small power tames through restraint.",
      meaning: "Like wind gathering beneath heaven, small accumulated power can bring gentle change. Patience and restraint are needed.",
      guidance: "Accumulate gently. Small efforts compound. Restrain impulses for greater reward."
    },
    lower: {
      brief: "Forcing things too soon.",
      meaning: "Small Taming reversed suggests impatience, overreaching, or forcing small matters that need time.",
      guidance: "Let it develop naturally. Rushing will spoil the accumulation."
    },
    image: "Wind moves in the air: the image of Small Taming. Thus the superior person refines the outward appearance of his will.",
    nucleus: ["restraint", "accumulation", "patience", "gentle force"],
    element: "Wind",
    astrology: "Venus"
  },
  {
    id: 10,
    name: "Treading",
    chinese: "履",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Lake" },
    judgment: "Treading judgment",
    keywords: ["treading", "conduct", "stepping carefully", "etiquette"],
    rulingLine: "A man of ability treads but does not tread heavily.",
    lines: [
      "Simple conduct. Treading on the tail of the tiger. One is frightened but reaches the goal.",
      "Treading on smooth ground. One is not equal to the tiger.",
      "The tiger looks. One is the eye of the blind.",
      "Treading the tail of the tiger. Danger. One is finally without blame.",
      "The tiger looks. One is the eye of the blind.",
      "Observe the treading, and the result is good fortune."
    ],
    upper: {
      brief: "Careful conduct avoids danger.",
      meaning: "Treading carefully, even on dangerous ground, leads to success. Proper conduct and awareness are essential.",
      guidance: "Proceed with caution. Watch where you step. Proper conduct opens doors."
    },
    lower: {
      brief: "Clumsy or reckless conduct.",
      meaning: "Treading reversed suggests careless behavior, overconfidence, or stumbling into danger.",
      guidance: "Slow down and watch your step. Overconfidence leads to falls."
    },
    image: "Heaven above, lake below: the image of Treading. Thus the superior person discriminates between high and low.",
    nucleus: ["conduct", "caution", "etiquette", "proper behavior"],
    element: "Metal",
    astrology: "Jupiter"
  },
  {
    id: 11,
    name: "Peace",
    chinese: "泰",
    symbol: "☷",
    trigrams: { upper: "Earth", lower: "Heaven" },
    judgment: "Peace judgment",
    keywords: ["peace", "harmony", "prosperity", "union"],
    rulingLine: "When the small goes away, great comes.",
    lines: [
      "When the small goes away, great comes.",
      "Endurance is beneficial. The small goes away.",
      "There is no one who does not benefit.",
      "The great comes in small waves. The small goes away in big waves.",
      "The great comes in great waves. One is not confused.",
      "The great comes in big waves. The small goes away."
    ],
    upper: {
      brief: "Peace and harmony bring prosperity.",
      meaning: "Heaven below earth creates harmony and peace. The small and great find balance. A time of prosperity and union.",
      guidance: "Enjoy the peace. Let harmony flow. This is a time of balance and good fortune."
    },
    lower: {
      brief: "Peace disrupted.",
      meaning: "Peace reversed suggests disharmony, stagnation, or the balance tipping toward chaos.",
      guidance: "Guard the harmony. Don't take peace for granted. Maintain balance."
    },
    image: "Heaven and earth unite: the image of Peace. Thus the ruler harmonizes and fixes the appointments of the four seasons.",
    nucleus: ["harmony", "prosperity", "union", "stability"],
    element: "Earth",
    astrology: "Libra"
  },
  {
    id: 12,
    name: "Standstill",
    chinese: "否",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Earth" },
    judgment: "Standstill judgment",
    keywords: ["standstill", "stagnation", "blockage", "decline"],
    rulingLine: "When the great man stirs, the small man is destroyed.",
    lines: [
      "When the great man stirs, the small man is destroyed.",
      "The great man stirs. The small man is destroyed.",
      "The small man is destroyed by the great man.",
      "The small man is destroyed by the great man.",
      "The great man is destroyed by the small man.",
      "When heaven and earth do not unite, the four seasons do not keep order.",
      "When heaven and earth unite, the four seasons keep order."
    ],
    upper: {
      brief: "Stagnation and blockage obscure truth.",
      meaning: "When heaven and earth are separated, nothing prospers. This is a time of standstill and obstruction.",
      guidance: "Wait out the darkness. Good people withdraw from foolish pursuits. Change will come."
    },
    lower: {
      brief: "Things begin to move again.",
      meaning: "Standstill reversed suggests the obstruction beginning to clear, hope emerging from stagnation.",
      guidance: "The worst is passing. Dawn approaches. Prepare to move forward."
    },
    image: "Heaven and earth do not unite: the image of Standstill. Thus the superior person abides by the humble estate.",
    nucleus: ["stagnation", "obstruction", "decline", "separation"],
    element: "Earth",
    astrology: "Capricorn"
  },
  {
    id: 13,
    name: "Fellowship",
    chinese: "同人",
    symbol: "☲",
    trigrams: { upper: "Fire", lower: "Heaven" },
    judgment: "Fellowship judgment",
    keywords: ["fellowship", "community", "sun", "openness"],
    rulingLine: "The great man unites the people. Good fortune.",
    lines: [
      "The great man unites the people. Good fortune.",
      "The great man unites the people. The small man unites the people.",
      "One buries one's own in the mountain.",
      "One climbs to the top of the mountain.",
      "One unites with one's own within the city.",
      "The great man unites the people."
    ],
    upper: {
      brief: "Fellowship in the open brings success.",
      meaning: "Like the sun shining over the world, true fellowship requires openness and equality. The great person unites all.",
      guidance: "Open your heart. Unite with others. Fellowship in the light brings success."
    },
    lower: {
      brief: "Exclusion and division.",
      meaning: "Fellowship reversed suggests cliques, exclusion, or superficial connections that lack depth.",
      guidance: "Open the circle wider. Exclusive groups breed resentment. True fellowship includes."
    },
    image: "Fire over heaven: the image of Fellowship. Thus the superior man harmonizes the appointment of the people.",
    nucleus: ["community", "union", "friendship", "openness"],
    element: "Fire",
    astrology: "Leo"
  },
  {
    id: 14,
    name: "Great Possession",
    chinese: "大有",
    symbol: "☲",
    trigrams: { upper: "Fire", lower: "Heaven" },
    judgment: "Great Possession judgment",
    keywords: ["possession", "abundance", "fire", "riches"],
    rulingLine: "The great man unites the people. Good fortune.",
    lines: [
      "No blame.",
      "There is a great possession. No blame.",
      "A small possession. One is covered with graph. No blame.",
      "No blame. It furthers one to have somewhere to go.",
      "The great man unites the people. Good fortune.",
      "The great man shows himself. Good fortune."
    ],
    upper: {
      brief: "Great possession requires great virtue.",
      meaning: "Fire above heaven illuminates all. Great possession comes through virtue and generosity, not greed.",
      guidance: "Share your abundance. True wealth includes others. Generosity multiplies blessings."
    },
    lower: {
      brief: "Greed and hoarding.",
      meaning: "Great Possession reversed suggests greed, possessiveness, or having without contentment.",
      guidance: "Release attachment. Possessions are temporary. True wealth is generosity."
    },
    image: "Fire over heaven: the image of Great Possession. Thus the superior man curbs evil and furthers good.",
    nucleus: ["abundance", "generosity", "riches", "possession"],
    element: "Fire",
    astrology: "Sagittarius"
  },
  {
    id: 15,
    name: "Modesty",
    chinese: "谦",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Earth" },
    judgment: "Modesty judgment",
    keywords: ["modesty", "humility", "spring", "serving"],
    rulingLine: "The modest mountain is humble.",
    lines: [
      "The modest mountain is humble.",
      "The modest mountain is humble. It furthers one to have somewhere to go.",
      "The modest mountain is humble. No blame.",
      "The modest mountain is humble. No blame.",
      "The modest mountain is humble. It furthers one to have somewhere to go.",
      "The modest mountain is humble. Good fortune."
    ],
    upper: {
      brief: "Modesty brings good fortune.",
      meaning: "The mountain hidden beneath the earth represents modesty. Humble service and restraint bring success.",
      guidance: "Practice humility. Let others shine. Modest conduct attracts good fortune."
    },
    lower: {
      brief: "False modesty or arrogance.",
      meaning: "Modesty reversed suggests false humility hiding arrogance, or excessive self-deprecation.",
      guidance: "Find genuine balance. True modesty doesn't diminish—it elevates naturally."
    },
    image: "Within the earth, a mountain: the image of Modesty. Thus the superior person reduces that which is too much.",
    nucleus: ["humility", "modesty", "restraint", "humbleness"],
    element: "Earth",
    astrology: "Virgo"
  },
  {
    id: 16,
    name: "Enthusiasm",
    chinese: "豫",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Earth" },
    judgment: "Enthusiasm judgment",
    keywords: ["enthusiasm", "excitement", "thunder", "joy"],
    rulingLine: "Enthusiasm vibrates to heaven.",
    lines: [
      "Enthusiasm vibrates to heaven.",
      "Enthusiasm vibrates to heaven.",
      "Enthusiasm vibrates to heaven. No blame.",
      "Enthusiasm vibrates to heaven. One's own side is winning.",
      "Enthusiasm vibrates to heaven. One is destroyed.",
      "Enthusiasm vibrates to heaven. One's own side is destroyed."
    ],
    upper: {
      brief: "Enthusiasm and joy attract followers.",
      meaning: "Thunder rises from the earth with joy. Enthusiasm inspires and attracts. A time of excitement and followers.",
      guidance: "Express your joy. Inspire others. Enthusiasm spreads and attracts good fortune."
    },
    lower: {
      brief: "Excessive or misplaced enthusiasm.",
      meaning: "Enthusiasm reversed suggests hysteria, misplaced excitement, or following the crowd blindly.",
      guidance: "Channel enthusiasm wisely. Not all excitement leads to good. Discern carefully."
    },
    image: "Thunder comes out of the earth: the image of Enthusiasm. Thus the ancient kings composed music to honor the virtue of the worthies.",
    nucleus: ["enthusiasm", "joy", "excitement", "inspiration"],
    element: "Wood",
    astrology: "Jupiter"
  },
  {
    id: 17,
    name: "Following",
    chinese: "随",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Thunder" },
    judgment: "Following judgment",
    keywords: ["following", "flexibility", "lake", "accordance"],
    rulingLine: "Sincerity and accord bring good fortune.",
    lines: [
      "Sincerity and accord bring good fortune. No blame.",
      "Sincerity and accord bring good fortune. No blame.",
      "Sincerity and accord bring good fortune. No blame.",
      "Sincerity and accord bring good fortune. No blame.",
      "Sincerity and accord bring good fortune. No blame.",
      "Sincerity and accord bring good fortune. No blame."
    ],
    upper: {
      brief: "Following with sincerity brings reward.",
      meaning: "Lake rests beneath thunder, providing flexibility. Following with sincerity and accord brings freedom from blame.",
      guidance: "Follow with genuine intent. Accord with others brings success. Flexibility is strength."
    },
    lower: {
      brief: "Blind following or broken accord.",
      meaning: "Following reversed suggests blind obedience, loss of self, or following the wrong leader.",
      guidance: "Question what you follow. True following requires discernment, not submission."
    },
    image: "Thunder follows lake: the image of Following. Thus the superior man establishes himself in an orderly sequence.",
    nucleus: ["following", "flexibility", "accord", "sincerity"],
    element: "Wood",
    astrology: "Mercury"
  },
  {
    id: 18,
    name: "Work on Decay",
    chinese: "蛊",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Wind" },
    judgment: "Work on Decay judgment",
    keywords: ["decay", "corruption", "reform", "remediation"],
    rulingLine: "Your own fault. This is serious.",
    lines: [
      "Your own fault. This is serious.",
      "Your own fault. This is serious.",
      "Your own fault. This is serious.",
      "Your own fault. This is serious.",
      "Your own fault. This is serious.",
      "Your own fault. This is serious."
    ],
    upper: {
      brief: "Decay must be worked on and remedied.",
      meaning: "Wind beneath the mountain stirs decay that has set in. Decay must be addressed before reform can begin.",
      guidance: "Face the decay honestly. Remediation requires acknowledging the rot. Then healing can begin."
    },
    lower: {
      brief: "Ignoring decay or pretending it doesn't exist.",
      meaning: "Work on Decay reversed suggests ignoring problems, denial, or cosmetic fixes that mask deeper rot.",
      guidance: "Don't ignore the signs. Decay spreads when untreated. Face it to heal it."
    },
    image: "Wind beneath the mountain: the image of Decay. Thus the superior man stirs the people and augments their virtue.",
    nucleus: ["decay", "corruption", "reform", "degeneration"],
    element: "Wood",
    astrology: "Saturn"
  },
  {
    id: 19,
    name: "Approach",
    chinese: "临",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Earth" },
    judgment: "Approach judgment",
    keywords: ["approach", "nearing", "dominance", "advance"],
    rulingLine: "The approaching ruler is favored by the people.",
    lines: [
      "The approaching ruler is favored by the people.",
      "The approaching ruler is favored by the people.",
      "The approaching ruler is favored by the people.",
      "The approaching ruler is favored by the people.",
      "The approaching ruler is favored by the people.",
      "The approaching ruler is favored by the people."
    ],
    upper: {
      brief: "Approach brings dominion and favor.",
      meaning: "Lake above earth approaches with gentle dominion. Approaching with wisdom and favor brings success.",
      guidance: "Advance with grace. Approach your goals with favor. Leadership by example succeeds."
    },
    lower: {
      brief: "Overbearing or unwelcome approach.",
      meaning: "Approach reversed suggests forceful intrusion, unwelcome advances, or demanding rather than earning.",
      guidance: "Respect boundaries. True approach is invited, not imposed."
    },
    image: "Lake above the earth: the image of Approach. Thus the superior man is inexhaustible in his ability to govern.",
    nucleus: ["approach", "dominion", "advancing", "ruling"],
    element: "Earth",
    astrology: "Venus"
  },
  {
    id: 20,
    name: "Contemplation",
    chinese: "观",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Earth" },
    judgment: "Contemplation judgment",
    keywords: ["contemplation", "viewing", "observation", "spectatorship"],
    rulingLine: "The contemplator is as if looking at himself.",
    lines: [
      "The contemplator is as if looking at himself.",
      "The contemplator is as if looking at himself.",
      "The contemplator is as if looking at himself.",
      "The contemplator is as if looking at himself.",
      "The contemplator is as if looking at himself.",
      "The contemplator is as if looking at himself."
    ],
    upper: {
      brief: "Contemplation reveals truth.",
      meaning: "Wind moves over the earth, observing all. True contemplation reveals what is hidden. The sage views and corrects.",
      guidance: "Observe and reflect. Contemplation reveals truth. Step back to see clearly."
    },
    lower: {
      brief: "Superficial or biased observation.",
      meaning: "Contemplation reversed suggests seeing only what you want to see, or obsessive rumination without insight.",
      guidance: "Look deeper. True contemplation requires objectivity. What are you avoiding?"
    },
    image: "The wind moves over the earth: the image of Contemplation. Thus the superior man is inexhaustible in his ability to examine.",
    nucleus: ["observation", "contemplation", "viewing", "introspection"],
    element: "Wood",
    astrology: "Venus"
  },
  {
    id: 21,
    name: "Biting Through",
    chinese: "噬嗑",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Fire" },
    judgment: "Biting Through judgment",
    keywords: ["biting", "chewing", "justice", "enforcement"],
    rulingLine: "The policeman carries a staff and breaks the car.",
    lines: [
      "The policeman carries a staff and breaks the car.",
      "The policeman carries a staff and breaks the car.",
      "The policeman carries a staff and breaks the car.",
      "The policeman carries a staff and breaks the car.",
      "The policeman carries a staff and breaks the car.",
      "The policeman carries a staff and breaks the car."
    ],
    upper: {
      brief: "Bite through obstacles with justice.",
      meaning: "Thunder and fire create a biting force. Must bite through resistance to achieve justice. Law enforcement.",
      guidance: "Enforce boundaries. Break through obstacles. Justice requires decisive action."
    },
    lower: {
      brief: "Excessive force or misuse of power.",
      meaning: "Biting Through reversed suggests cruelty, excessive punishment, or biting off more than you can chew.",
      guidance: "Measure your force. Not every obstacle needs breaking. Gentler solutions exist."
    },
    image: "Thunder and lightning: the image of Biting Through. Thus the ancient kings established laws with clarity.",
    nucleus: ["justice", "enforcement", "biting", "law"],
    element: "Fire",
    astrology: "Mars"
  },
  {
    id: 22,
    name: "Grace",
    chinese: "贲",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Fire" },
    judgment: "Grace judgment",
    keywords: ["grace", "adornment", "beauty", "decoration"],
    rulingLine: "A man does not eat his own flour. Good fortune.",
    lines: [
      "A man does not eat his own flour. Good fortune.",
      "A man does not eat his own flour. Good fortune.",
      "A man does not eat his own flour. Good fortune.",
      "A man does not eat his own flour. Good fortune.",
      "A man does not eat his own flour. Good fortune.",
      "A man does not eat his own flour. Good fortune."
    ],
    upper: {
      brief: "Grace and adornment have their place.",
      meaning: "Fire illuminates the mountain with beauty. Grace and adornment enhance when they don't overwhelm substance.",
      guidance: "Cultivate elegance. Beauty serves purpose. Grace enhances without deceiving."
    },
    lower: {
      brief: "Superficiality and vanity.",
      meaning: "Grace reversed suggests excessive vanity, false adornment, or style over substance.",
      guidance: "Look beyond appearances. True beauty comes from within. Don't be deceived by surface."
    },
    image: "Fire at the foot of the mountain: the image of Grace. Thus the superior man is inexhaustible in his use of written documents.",
    nucleus: ["beauty", "adornment", "elegance", "grace"],
    element: "Fire",
    astrology: "Venus"
  },
  {
    id: 23,
    name: "Splitting Apart",
    chinese: "剥",
    symbol: "☷",
    trigrams: { upper: "Earth", lower: "Mountain" },
    judgment: "Splitting Apart judgment",
    keywords: ["splitting", "peeling", "decay", "disintegration"],
    rulingLine: "A slice of melon covered with graph. No blame.",
    lines: [
      "A slice of melon covered with graph. No blame.",
      "A slice of melon covered with graph. No blame.",
      "A slice of melon covered with graph. No blame.",
      "A slice of melon covered with graph. No blame.",
      "A slice of melon covered with graph. No blame.",
      "A slice of melon covered with graph. No blame."
    ],
    upper: {
      brief: "Peel away decay to find truth.",
      meaning: "The mountain crumbles into the earth. Things must split apart before they can be rebuilt. Strip away the false.",
      guidance: "Let go of what doesn't serve. Strip away pretense. Truth emerges from the wreckage."
    },
    lower: {
      brief: "Resisting necessary dissolution.",
      meaning: "Splitting Apart reversed suggests clinging to what's already crumbling, or forcing division prematurely.",
      guidance: "Don't fight the dissolution. Sometimes things must fall apart. Trust the process."
    },
    image: "The mountain rests on the earth: the image of Splitting Apart. Thus those above it may be removed.",
    nucleus: ["stripping", "peeling", "decay", "disintegration"],
    element: "Earth",
    astrology: "Pluto"
  },
  {
    id: 24,
    name: "Return",
    chinese: "复",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Earth" },
    judgment: "Return judgment",
    keywords: ["return", "coming back", "spring", "renewal"],
    rulingLine: "Without a君王, there is nothing that does not go wrong.",
    lines: [
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong."
    ],
    upper: {
      brief: "Return brings new beginnings.",
      meaning: "Thunder emerges from the earth—the return of spring. Things return to their source. New cycles begin.",
      guidance: "Return to your center. New cycles are beginning. The seed of renewal is planted."
    },
    lower: {
      brief: "False returns or going in circles.",
      meaning: "Return reversed suggests repetitive patterns, false starts, or returning to destructive habits.",
      guidance: "Return to what truly matters. Don't repeat old mistakes. Choose genuine renewal."
    },
    image: "Thunder within the earth: the image of Return. Thus the kings of antiquity closed the passes.",
    nucleus: ["return", "renewal", "beginning", "coming back"],
    element: "Wood",
    astrology: "Moon"
  },
  {
    id: 25,
    name: "Innocence",
    chinese: "无妄",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Thunder" },
    judgment: "Innocence judgment",
    keywords: ["innocence", "without deception", "naturalness", "truth"],
    rulingLine: "Without a君王, there is nothing that does not go wrong.",
    lines: [
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong.",
      "Without a君王, there is nothing that does not go wrong."
    ],
    upper: {
      brief: "Innocence and naturalness bring success.",
      meaning: "Heaven moves thunder without deception. True innocence is naturalness—acting without ulterior motive.",
      guidance: "Act with innocence. Be natural and sincere. Success comes to the guileless."
    },
    lower: {
      brief: "Sophistry and deception.",
      meaning: "Innocence reversed suggests cunning, deception, or sophisticated schemes that betray truth.",
      guidance: "Drop the games. Sophistry backfires. Simple truth outperforms clever lies."
    },
    image: "Thunder comes from heaven: the image of Innocence. Thus the superior man handles cases without bias.",
    nucleus: ["innocence", "naturalness", "simplicity", "sincerity"],
    element: "Wood",
    astrology: "Uranus"
  },
  {
    id: 26,
    name: "Great Taming",
    chinese: "大畜",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Heaven" },
    judgment: "Great Taming judgment",
    keywords: ["taming", "restraining", "great strength", "storing"],
    rulingLine: "The great man tames the wild.",
    lines: [
      "The great man tames the wild.",
      "The great man tames the wild.",
      "The great man tames the wild.",
      "The great man tames the wild.",
      "The great man tames the wild.",
      "The great man tames the wild."
    ],
    upper: {
      brief: "Great power tamed serves great purpose.",
      meaning: "Heaven rises above the lake. Great power can be restrained and stored for greater purpose. Master yourself.",
      guidance: "Tame your power. Great strength in service to others multiplies its effect. Restrain to release."
    },
    lower: {
      brief: "Wild, untamed force.",
      meaning: "Great Taming reversed suggests raw, uncontrolled power, or forcing rather than cultivating.",
      guidance: "Master yourself first. Untamed power destroys. Discipline creates true strength."
    },
    image: "Heaven within the mountain: the image of Great Taming. Thus the superior man acquaints himself with the sayings of the ancients.",
    nucleus: ["taming", "storing", "discipline", "restraint"],
    element: "Metal",
    astrology: "Saturn"
  },
  {
    id: 27,
    name: "Corners of the Mouth",
    chinese: "颐",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Thunder" },
    judgment: "Corners of the Mouth judgment",
    keywords: ["nourishment", "eating", "speech", "mouth"],
    rulingLine: "Perseverance brings good fortune.",
    lines: [
      "Perseverance brings good fortune.",
      "Perseverance brings good fortune.",
      "Perseverance brings good fortune.",
      "Perseverance brings good fortune.",
      "Perseverance brings good fortune.",
      "Perseverance brings good fortune."
    ],
    upper: {
      brief: "Nourishment sustains life.",
      meaning: "Thunder echoes between mountains, giving voice. The mouth feeds the body, speech feeds the soul. Nourishment is essential.",
      guidance: "Nourish yourself properly. Choose words carefully. What sustains you?"
    },
    lower: {
      brief: "Gluttony or harmful speech.",
      meaning: "Corners of the Mouth reversed suggests overindulgence, harsh speech, or taking from others without reciprocation.",
      guidance: "Moderation in all things. Guard your speech. Give as well as take."
    },
    image: "Thunder at the foot of the mountain: the image of Corners of the Mouth. Thus the superior man conducts himself with wariness in eating and drinking.",
    nucleus: ["nourishment", "eating", "speech", "sustenance"],
    element: "Wood",
    astrology: "Mercury"
  },
  {
    id: 28,
    name: "Great Exceeding",
    chinese: "大过",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Wind" },
    judgment: "Great Exceeding judgment",
    keywords: ["exceeding", "great surpassing", "decay", "collapse"],
    rulingLine: "A tree fills the house. One should not build a house.",
    lines: [
      "A tree fills the house. One should not build a house.",
      "A tree fills the house. One should not build a house.",
      "A tree fills the house. One should not build a house.",
      "A tree fills the house. One should not build a house.",
      "A tree fills the house. One should not build a house.",
      "A tree fills the house. One should not build a house."
    ],
    upper: {
      brief: "Great surpassing requires great sacrifice.",
      meaning: "Wind over lake exceeds normal bounds. Great excess requires decisive action. The beam bends before it breaks.",
      guidance: "Acknowledge the excess. Bold action needed now. Sometimes destruction precedes construction."
    },
    lower: {
      brief: "Excess beyond repair.",
      meaning: "Great Exceeding reversed suggests excess so great it cannot be corrected, or collapse imminent.",
      guidance: "The situation may be beyond saving. Accept what must fall. New foundations needed."
    },
    image: "Wind over lake: the image of Great Exceeding. Thus the superior man stands alone without fear.",
    nucleus: ["excess", "surpassing", "going beyond", "overwhelming"],
    element: "Wood",
    astrology: "Pluto"
  },
  {
    id: 29,
    name: "Abyss",
    chinese: "坎",
    symbol: "☵",
    trigrams: { upper: "Water", lower: "Water" },
    judgment: "Abyss judgment",
    keywords: ["abyss", "water", "danger", "falling"],
    rulingLine: "A man comes out of the pit. No blame.",
    lines: [
      "A man comes out of the pit. No blame.",
      "A man comes out of the pit. No blame.",
      "A man comes out of the pit. No blame.",
      "A man comes out of the pit. No blame.",
      "A man comes out of the pit. No blame.",
      "A man comes out of the pit. No blame."
    ],
    upper: {
      brief: "Water fills the abyss—danger and perseverance.",
      meaning: "Water constantly flows into the abyss, filling it. Danger requires constant vigilance and perseverance.",
      guidance: "Navigate carefully. Danger surrounds but so does opportunity. Perseverance is essential."
    },
    lower: {
      brief: "Drowning in danger.",
      meaning: "Abyss reversed suggests giving in to danger, complete loss, or becoming trapped in the abyss.",
      guidance: "Don't give up. There is always a way out. Seek help. Keep persevering."
    },
    image: "Water flowing continually: the image of the Abyss. Thus the superior man cultivates Watchfulness.",
    nucleus: ["danger", "water", "abyss", "pit", "peril"],
    element: "Water",
    astrology: "Pluto"
  },
  {
    id: 30,
    name: "Clinging",
    chinese: "离",
    symbol: "☲",
    trigrams: { upper: "Fire", lower: "Fire" },
    judgment: "Clinging judgment",
    keywords: ["clinging", "fire", "brightness", "dependency"],
    rulingLine: "The great king lays siege to the cities.",
    lines: [
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities."
    ],
    upper: {
      brief: "Fire clings to its nature—brightness and beauty.",
      meaning: "Fire clings to what it consumes, giving light and warmth. Cling to virtue and truth, not destructively.",
      guidance: "Shine your light. Beauty illuminates. Cling to what elevates, not what consumes."
    },
    lower: {
      brief: "Destructive clinging or dependency.",
      meaning: "Clinging reversed suggests clinging to what destroys, addiction, or codependency that burns.",
      guidance: "Release what consumes you. Healthy attachment is possible. Don't let fire consume itself."
    },
    image: "Fire takes hold of fire: the image of Clinging. Thus the superior man is inexhaustible in his protective watchfulness.",
    nucleus: ["clinging", "fire", "light", "brightness", "beauty"],
    element: "Fire",
    astrology: "Sun"
  },
  {
    id: 31,
    name: "Influence",
    chinese: "咸",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Mountain" },
    judgment: "Influence judgment",
    keywords: ["influence", "wooing", "marriage", "sensitivity"],
    rulingLine: "The movement of the heart is in the sixth place.",
    lines: [
      "The movement of the heart is in the sixth place.",
      "The movement of the heart is in the sixth place.",
      "The movement of the heart is in the sixth place.",
      "The movement of the heart is in the sixth place.",
      "The movement of the heart is in the sixth place.",
      "The movement of the heart is in the sixth place."
    ],
    upper: {
      brief: "Influence and receptivity create connection.",
      meaning: "Lake rests upon the mountain, influencing it. Mutual influence between hearts creates marriage and partnership.",
      guidance: "Open your heart to influence. True connection is mutual. Influence through gentleness."
    },
    lower: {
      brief: "Imbalance in relationship.",
      meaning: "Influence reversed suggests one-sided influence, forced marriage, or emotional manipulation.",
      guidance: "Balance giving and receiving. Relationships require mutual influence, not dominance."
    },
    image: "Lake at the foot of the mountain: the image of Influence. Thus the superior man is inexhaustible in his teaching.",
    nucleus: ["influence", "wooing", "marriage", "sensitivity"],
    element: "Metal",
    astrology: "Venus"
  },
  {
    id: 32,
    name: "Duration",
    chinese: "恒",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Wind" },
    judgment: "Duration judgment",
    keywords: ["duration", "perseverance", "constancy", "lasting"],
    rulingLine: "Duration and perseverance bring good fortune.",
    lines: [
      "Duration and perseverance bring good fortune.",
      "Duration and perseverance bring good fortune.",
      "Duration and perseverance bring good fortune.",
      "Duration and perseverance bring good fortune.",
      "Duration and perseverance bring good fortune.",
      "Duration and perseverance bring good fortune."
    ],
    upper: {
      brief: "Duration brings success through constancy.",
      meaning: "Thunder and wind move together in eternal rhythm. Duration requires constancy and perseverance through changes.",
      guidance: "Persevere. Duration brings reward. Maintain constancy through all seasons."
    },
    lower: {
      brief: "Rigidity or constant change.",
      meaning: "Duration reversed suggests stubbornness, inability to adapt, or constant flux without foundation.",
      guidance: "Balance duration with flexibility. Stuck in place isn't duration—it's stagnation."
    },
    image: "Thunder and wind: the image of Duration. Thus the superior man stands firm and does not change his direction.",
    nucleus: ["duration", "perseverance", "constancy", "lasting"],
    element: "Wood",
    astrology: "Saturn"
  },
  {
    id: 33,
    name: "Retreat",
    chinese: "遁",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Mountain" },
    judgment: "Retreat judgment",
    keywords: ["retreat", "withdrawal", "discretion", "escape"],
    rulingLine: "The great man retreats and does not act.",
    lines: [
      "The great man retreats and does not act.",
      "The great man retreats and does not act.",
      "The great man retreats and does not act.",
      "The great man retreats and does not act.",
      "The great man retreats and does not act.",
      "The great man retreats and does not act."
    ],
    upper: {
      brief: "Strategic retreat preserves strength.",
      meaning: "Heaven above the mountain retreats. The strong withdraw wisely. Discretion is the better part of valor.",
      guidance: "Know when to retreat. Strategic withdrawal preserves power. Fight another day."
    },
    lower: {
      brief: "Retreat becomes flight.",
      meaning: "Retreat reversed suggests cowardice, permanent withdrawal, or fleeing when one should stand.",
      guidance: "Sometimes you must stand your ground. Retreat becomes surrender when overused."
    },
    image: "Heaven at the top of the mountain: the image of Retreat. Thus the superior man keeps distant from the sordid.",
    nucleus: ["retreat", "withdrawal", "discretion", "rest"],
    element: "Metal",
    astrology: "Mercury"
  },
  {
    id: 34,
    name: "Great Power",
    chinese: "大壮",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Heaven" },
    judgment: "Great Power judgment",
    keywords: ["great power", "strength", "might", "animal"],
    rulingLine: "The ram butts against the fence and gets stuck.",
    lines: [
      "The ram butts against the fence and gets stuck.",
      "The ram butts against the fence and gets stuck.",
      "The ram butts against the fence and gets stuck.",
      "The ram butts against the fence and gets stuck.",
      "The ram butts against the fence and gets stuck.",
      "The ram butts against the fence and gets stuck."
    ],
    upper: {
      brief: "Great power must be used with wisdom.",
      meaning: "Thunder rises above heaven—great power ascending. Raw strength requires wisdom to avoid self-destruction.",
      guidance: "Power is not enough. Channel strength wisely. Restraint amplifies might."
    },
    lower: {
      brief: "Brute force without wisdom.",
      meaning: "Great Power reversed suggests abuse of power, recklessness, or butting against immovable obstacles.",
      guidance: "Stop forcing. Wisdom requires knowing when power serves and when it destroys."
    },
    image: "Thunder over heaven: the image of Great Power. Thus the superior man does not tread the path that is forbidden.",
    nucleus: ["power", "strength", "might", "force"],
    element: "Wood",
    astrology: "Aries"
  },
  {
    id: 35,
    name: "Progress",
    chinese: "晋",
    symbol: "☲",
    trigrams: { upper: "Fire", lower: "Earth" },
    judgment: "Progress judgment",
    keywords: ["progress", "advancing", "brightness", "rising"],
    rulingLine: "The great king lays siege to the cities.",
    lines: [
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities.",
      "The great king lays siege to the cities."
    ],
    upper: {
      brief: "Progress like the sun rising.",
      meaning: "Fire rises above earth, illuminating all. Progress and advancement come through brightness and clarity.",
      guidance: "Advance with light. Rise above obstacles. Progress comes to those who shine."
    },
    lower: {
      brief: "False progress or exposure.",
      meaning: "Progress reversed suggests being exposed, overreaching, or progress that exposes flaws.",
      guidance: "Authentic advancement. False progress unravels. Shine honestly."
    },
    image: "The sun rises over the earth: the image of Progress. Thus the great sovereign illuminates the four quarters.",
    nucleus: ["progress", "advancement", "brightness", "rising"],
    element: "Fire",
    astrology: "Sun"
  },
  {
    id: 36,
    name: "Darkening of the Light",
    chinese: "明夷",
    symbol: "☷",
    trigrams: { upper: "Earth", lower: "Fire" },
    judgment: "Darkening of the Light judgment",
    keywords: ["darkening", "injury", "difficult times", "persecution"],
    rulingLine: "First, one falls into the pit. Later, one calls on a dog.",
    lines: [
      "First, one falls into the pit. Later, one calls on a dog.",
      "First, one falls into the pit. Later, one calls on a dog.",
      "First, one falls into the pit. Later, one calls on a dog.",
      "First, one falls into the pit. Later, one calls on a dog.",
      "First, one falls into the pit. Later, one calls on a dog.",
      "First, one falls into the pit. Later, one calls on a dog."
    ],
    upper: {
      brief: "Darkness descends—endure with wisdom.",
      meaning: "Fire hidden beneath earth—light is hidden. Difficult times require hiding your brilliance and enduring.",
      guidance: "Hide your light. Endure the darkness. Wisdom survives what brilliance cannot."
    },
    lower: {
      brief: "Forced into hiding or despair.",
      meaning: "Darkening reversed suggests staying hidden too long, despair in darkness, or being exposed prematurely.",
      guidance: "The light returns. Don't lose hope. Your brilliance will shine again."
    },
    image: "Fire within the earth: the image of Darkening of the Light. Thus the superior man manages affairs without glorifying himself.",
    nucleus: ["darkness", "injury", "persecution", "concealment"],
    element: "Fire",
    astrology: "Venus"
  },
  {
    id: 37,
    name: "Family",
    chinese: "家人",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Fire" },
    judgment: "Family judgment",
    keywords: ["family", "home", "relationships", "nurturing"],
    rulingLine: "The family prospers and flourishes.",
    lines: [
      "The family prospers and flourishes.",
      "The family prospers and flourishes.",
      "The family prospers and flourishes.",
      "The family prospers and flourishes.",
      "The family prospers and flourishes.",
      "The family prospers and flourishes."
    ],
    upper: {
      brief: "Family requires order and nurturing.",
      meaning: "Wind来源于 fire—stewardship and nourishment. Family requires proper roles and mutual care to flourish.",
      guidance: "Nurture your family. Establish order with love. The family that nourishes thrives."
    },
    lower: {
      brief: "Family dysfunction.",
      meaning: "Family reversed suggests discord, improper roles, or family ties that wound rather than nurture.",
      guidance: "Address family wounds. Healthy families require work. Seek harmony."
    },
    image: "Fire within the wind: the image of the Family. Thus the superior man is inexhaustible in his purpose of teaching.",
    nucleus: ["family", "home", "relationships", "nurturing"],
    element: "Wood",
    astrology: "Moon"
  },
  {
    id: 38,
    name: "Opposition",
    chinese: "睽",
    symbol: "☱",
    trigrams: { upper: "Fire", lower: "Lake" },
    judgment: "Opposition judgment",
    keywords: ["opposition", "conflict", "divergence", "alienation"],
    rulingLine: "The two friends ride together.",
    lines: [
      "The two friends ride together.",
      "The two friends ride together.",
      "The two friends ride together.",
      "The two friends ride together.",
      "The two friends ride together.",
      "The two friends ride together."
    ],
    upper: {
      brief: "Opposition can be bridged.",
      meaning: "Fire above, lake below—they oppose yet together. Opposition exists but unity is possible through understanding.",
      guidance: "Seek common ground. Opposition is not eternal. Bridge divides through wisdom."
    },
    lower: {
      brief: "Polarization and alienation.",
      meaning: "Opposition reversed suggests irreconcilable differences, complete alienation, or refusing to see another view.",
      guidance: "Let go of opposition. Not every conflict needs winning. Find the middle."
    },
    image: "Fire above, lake below: the image of Opposition. Thus the superior man is inexhaustible in his purpose of differentiation.",
    nucleus: ["opposition", "conflict", "divergence", "alienation"],
    element: "Fire",
    astrology: "Mars"
  },
  {
    id: 39,
    name: "Obstruction",
    chinese: "蹇",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Water" },
    judgment: "Obstruction judgment",
    keywords: ["obstruction", "hindrance", "difficulty", "halting"],
    rulingLine: "A man pauses at a water's edge.",
    lines: [
      "A man pauses at a water's edge.",
      "A man pauses at a water's edge.",
      "A man pauses at a water's edge.",
      "A man pauses at a water's edge.",
      "A man pauses at a water's edge.",
      "A man pauses at a water's edge."
    ],
    upper: {
      brief: "Obstruction requires wise counsel.",
      meaning: "Water below mountain cannot flow—obstruction. Wise counsel and seeking help overcome difficulties.",
      guidance: "Seek wise counsel. Don't face obstruction alone. Help comes to those who ask."
    },
    lower: {
      brief: "Stubbornly refusing help.",
      meaning: "Obstruction reversed suggests stubborn independence, refusing help, or charging into obstacles.",
      guidance: "Accept help. Solitary resistance to obstruction leads nowhere. Seek allies."
    },
    image: "Water on the mountain: the image of Obstruction. Thus the superior man reflects on his own behavior and exerts himself.",
    nucleus: ["obstruction", "difficulty", "halt", "hindrance"],
    element: "Water",
    astrology: "Saturn"
  },
  {
    id: 40,
    name: "Deliverance",
    chinese: "解",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Water" },
    judgment: "Deliverance judgment",
    keywords: ["deliverance", "liberation", "solution", "release"],
    rulingLine: "The southern tiger has no claws.",
    lines: [
      "No blame.",
      "One hunts three kinds of fox and gets a yellow graph.",
      "One gets a carriage and has no whip.",
      "One is freed from the stocks. One's own man brings the whip.",
      "If one gets a companion, one calls him.",
      "The prince shoots a hawk and hits it."
    ],
    upper: {
      brief: "Deliverance from obstruction.",
      meaning: "Thunder and rain bring release. Deliverance comes after difficulty. The solution emerges from patience.",
      guidance: "The obstruction breaks. Freedom comes. Celebrate the release and move forward."
    },
    lower: {
      brief: "Premature or false release.",
      meaning: "Deliverance reversed suggests false hope, premature celebration, or liberation that creates new problems.",
      guidance: "Verify the release is real. Don't relax vigilance too soon. Freedom requires responsibility."
    },
    image: "Thunder and rain: the image of Deliverance. Thus the superior man pardons misdeeds and mitigates punishments.",
    nucleus: ["deliverance", "release", "solution", "freedom"],
    element: "Wood",
    astrology: "Jupiter"
  },
  {
    id: 41,
    name: "Decrease",
    chinese: "损",
    symbol: "☱",
    trigrams: { upper: "Mountain", lower: "Lake" },
    judgment: "Decrease judgment",
    keywords: ["decrease", "diminishment", "sacrifice", "loss"],
    rulingLine: "One proceeds and then is without blame.",
    lines: [
      "One proceeds and then is without blame.",
      "One proceeds and then is without blame.",
      "One proceeds and then is without blame.",
      "One proceeds and then is without blame.",
      "One proceeds and then is without blame.",
      "One proceeds and then is without blame."
    ],
    upper: {
      brief: "Decrease with sincerity brings gain.",
      meaning: "Lake empties into the mountain—decrease with purpose. True decrease is sacrifice, not loss. Sincerity transforms loss to gain.",
      guidance: "Decrease what is unnecessary. Sacrifice clears space for what matters. Give to receive."
    },
    lower: {
      brief: "Wasteful decrease or forced sacrifice.",
      meaning: "Decrease reversed suggests pointless sacrifice, being taken from, or decrease without purpose.",
      guidance: "Ensure decrease serves purpose. Don't sacrifice blindly. What are you really giving up?"
    },
    image: "When the mountain and lake are balanced: the image of Decrease. Thus the superior man controls his anger and restrains his desires.",
    nucleus: ["decrease", "diminishment", "sacrifice", "loss"],
    element: "Metal",
    astrology: "Mercury"
  },
  {
    id: 42,
    name: "Increase",
    chinese: "益",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Thunder" },
    judgment: "Increase judgment",
    keywords: ["increase", "growth", "expansion", "gain"],
    rulingLine: "It furthers one to have somewhere to go.",
    lines: [
      "It furthers one to have somewhere to go.",
      "It furthers one to have somewhere to go.",
      "It furthers one to have somewhere to go.",
      "It furthers one to have somewhere to go.",
      "It furthers one to have somewhere to go.",
      "It furthers one to have somewhere to go."
    ],
    upper: {
      brief: "Increase flows from true sacrifice.",
      meaning: "Thunder and wind move together—increase flows naturally. True increase comes from genuine sacrifice, not taking.",
      guidance: "Give and you shall receive. Increase comes to those who share. Generosity multiplies."
    },
    lower: {
      brief: "Greedy increase or exploitation.",
      meaning: "Increase reversed suggests exploitative growth, taking rather than giving, or hollow expansion.",
      guidance: "Don't take more than your share. True increase is shared. Greed destroys growth."
    },
    image: "Thunder and wind: the image of Increase. Thus the superior man, when he sees what is good, is like a mirror.",
    nucleus: ["increase", "growth", "expansion", "gain"],
    element: "Wood",
    astrology: "Jupiter"
  },
  {
    id: 43,
    name: "Resolution",
    chinese: "夬",
    symbol: "☰",
    trigrams: { upper: "Heaven", lower: "Lake" },
    judgment: "Resolution judgment",
    keywords: ["resolution", "breakthrough", "determination", "decisive action"],
    rulingLine: "The weak moon fights the strong sun.",
    lines: [
      "A strong shoulder-blade. No blame.",
      "Danger. One weeps and sighs. No blame.",
      "The strong moon fights the strong sun. One falls to the ground.",
      "The strong moon fights the strong sun. One is without blame.",
      "The strong moon fights the strong sun. One falls to the ground.",
      "The strong moon fights the strong sun. One is without blame."
    ],
    upper: {
      brief: "Resolution requires decisive action.",
      meaning: "Lake rises to heaven—water breaks through. Resolution requires decisive action to overcome stubborn obstacles.",
      guidance: "Act decisively. Breakthrough approaches. Remove what blocks you."
    },
    lower: {
      brief: "Failed resolution or stubborn block.",
      meaning: "Resolution reversed suggests weakness in decisive action, or the obstacle proving stronger than expected.",
      guidance: "Gather strength. The breakthrough requires more. Don't force prematurely."
    },
    image: "Heaven over lake: the image of Resolution. Thus the superior man decides cases and executes justice.",
    nucleus: ["resolution", "breakthrough", "decisive action", "overcoming"],
    element: "Metal",
    astrology: "Mars"
  },
  {
    id: 44,
    name: "Coupling",
    chinese: "姤",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Heaven" },
    judgment: "Coupling judgment",
    keywords: ["coupling", "meeting", "temptation", "confronting"],
    rulingLine: "One should not marry this woman.",
    lines: [
      "One should not marry this woman.",
      "One should not marry this woman.",
      "One should not marry this woman.",
      "One should not marry this woman.",
      "One should not marry this woman.",
      "One should not marry this woman."
    ],
    upper: {
      brief: "Meeting requires discernment.",
      meaning: "Wind moves beneath heaven—meeting unexpectedly. Not all meetings are beneficial. Discernment is essential.",
      guidance: "Beware unexpected meetings. Test before trusting. Discernment protects against misuse."
    },
    lower: {
      brief: "Temptation or corrupt meeting.",
      meaning: "Coupling reversed suggests harmful relationships, yielding to temptation, or meeting with bad company.",
      guidance: "Resist harmful temptation. Choose meetings wisely. Not all connection is beneficial."
    },
    image: "Wind beneath heaven: the image of Coupling. Thus the superior man awakens the people and does not forget their affairs.",
    nucleus: ["meeting", "coupling", "temptation", "encounter"],
    element: "Wood",
    astrology: "Venus"
  },
  {
    id: 45,
    name: "Gathering",
    chinese: "萃",
    symbol: "☷",
    trigrams: { upper: "Earth", lower: "Lake" },
    judgment: "Gathering judgment",
    keywords: ["gathering", "assembly", "convergence", "consecration"],
    rulingLine: "The gathered ones weep and sigh.",
    lines: [
      "The gathered ones weep and sigh.",
      "The gathered ones weep and sigh.",
      "The gathered ones weep and sigh.",
      "The gathered ones weep and sigh.",
      "The gathered ones weep and sigh.",
      "The gathered ones weep and sigh."
    ],
    upper: {
      brief: "Gathering requires true leadership.",
      meaning: "Lake rests upon earth—gathering of waters. True gathering requires leadership and shared sorrow before joy.",
      guidance: "Lead with heart. Gather those who share your purpose. True assembly heals."
    },
    lower: {
      brief: "Forced or false gathering.",
      meaning: "Gathering reversed suggests forced conformity, false unity, or gathering without genuine connection.",
      guidance: "Don't gather for gathering's sake. True assembly has purpose. Superficial gathering disperses."
    },
    image: "Lake on the earth: the image of Gathering. Thus the superior man abides by the proper seasons.",
    nucleus: ["gathering", "assembly", "collection", "union"],
    element: "Earth",
    astrology: "Venus"
  },
  {
    id: 46,
    name: "Pushing Upward",
    chinese: "升",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Earth" },
    judgment: "Pushing Upward judgment",
    keywords: ["pushing upward", "growth", "ascending", "perseverance"],
    rulingLine: "One climbs to the top of the mountain.",
    lines: [
      "One climbs to the top of the mountain.",
      "One climbs to the top of the mountain.",
      "One climbs to the top of the mountain.",
      "One climbs to the top of the mountain.",
      "One climbs to the top of the mountain.",
      "One climbs to the top of the mountain."
    ],
    upper: {
      brief: "Push upward through perseverance.",
      meaning: "Wind rises from the earth—gradual growth upward. Pushing upward requires patience and gathering strength.",
      guidance: "Grow steadily upward. Perseverance lifts you. Gather resources for the ascent."
    },
    lower: {
      brief: "Premature ascent or false elevation.",
      meaning: "Pushing Upward reversed suggests false elevation, overreaching, or pushing before ready.",
      guidance: "Prepare before ascending. Premature elevation falls. Build solid foundations."
    },
    image: "Wind moves upward: the image of Pushing Upward. Thus the superior man incites the people to industry.",
    nucleus: ["ascending", "growth", "elevation", "advancement"],
    element: "Wood",
    astrology: "Jupiter"
  },
  {
    id: 47,
    name: "Oppression",
    chinese: "困",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Water" },
    judgment: "Oppression judgment",
    keywords: ["oppression", "exhaustion", "entrapment", "confinement"],
    rulingLine: "One is so exhausted that one has no strength to speak.",
    lines: [
      "One is so exhausted that one has no strength to speak.",
      "One is so exhausted that one has no strength to speak.",
      "One is so exhausted that one has no strength to speak.",
      "One is so exhausted that one has no strength to speak.",
      "One is so exhausted that one has no strength to speak.",
      "One is so exhausted that one has no strength to speak."
    ],
    upper: {
      brief: "Oppression exhausts but also reveals truth.",
      meaning: "Water in the lake has no outflow—oppression and exhaustion. Truth emerges under pressure. Release comes through inner strength.",
      guidance: "Endure the oppression. Truth is revealed through suffering. Inner resources sustain you."
    },
    lower: {
      brief: "Surrendering to oppression.",
      meaning: "Oppression reversed suggests giving in, losing hope, or allowing exhaustion to defeat you.",
      guidance: "Don't surrender. Hope exists. Your spirit can overcome the material constraint."
    },
    image: "Water in the lake: the image of Oppression. Thus the superior man is inexhaustible in his purpose and strengthens his virtue.",
    nucleus: ["oppression", "exhaustion", "entrapment", "confinement"],
    element: "Water",
    astrology: "Pluto"
  },
  {
    id: 48,
    name: "The Well",
    chinese: "井",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Water" },
    judgment: "The Well judgment",
    keywords: ["well", "water source", "foundation", "community"],
    rulingLine: "The well is cleaned and no one uses it.",
    lines: [
      "The well is cleaned and no one uses it.",
      "The well is cleaned and no one uses it.",
      "The well is cleaned and no one uses it.",
      "The well is cleaned and no one uses it.",
      "The well is cleaned and no one uses it.",
      "The well is cleaned and no one uses it."
    ],
    upper: {
      brief: "The well nourishes the community.",
      meaning: "Wind moves over water—drawing from the well. The community depends on the well's unchanging nature. Foundations sustain life.",
      guidance: "Maintain your foundations. The community needs reliable sources. Be the well that nourishes."
    },
    lower: {
      brief: "Corrupted well or neglected foundation.",
      meaning: "The Well reversed suggests corrupted sources, neglected foundations, or community breaking down.",
      guidance: "Clean the well. Restore the foundation. Communities depend on those who maintain essential structures."
    },
    image: "Wind moves over water: the image of the Well. Thus the superior man exhorts the people to work.",
    nucleus: ["well", "water", "foundation", "community", "source"],
    element: "Wood",
    astrology: "Moon"
  },
  {
    id: 49,
    name: "Revolution",
    chinese: "革",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Fire" },
    judgment: "Revolution judgment",
    keywords: ["revolution", "transformation", "radical change", "reform"],
    rulingLine: "One bathes in the morning.",
    lines: [
      "One bathes in the morning.",
      "One bathes in the morning.",
      "One bathes in the morning.",
      "One bathes in the morning.",
      "One bathes in the morning.",
      "One bathes in the morning."
    ],
    upper: {
      brief: "Revolution transforms through truth.",
      meaning: "Fire transforms lake—radical change. Revolution must be justified and timed correctly. Truth transforms, not force.",
      guidance: "Transform with truth. Revolution requires justification. Change for the right reasons."
    },
    lower: {
      brief: "Destructive or unjustified revolution.",
      meaning: "Revolution reversed suggests reckless change, destruction without purpose, or timing that fails.",
      guidance: "Revolution for its own sake destroys. Ensure change serves truth. Timing matters."
    },
    image: "Fire in the lake: the image of Revolution. Thus the superior man alters the appointments.",
    nucleus: ["revolution", "transformation", "reform", "change"],
    element: "Metal",
    astrology: "Mars"
  },
  {
    id: 50,
    name: "The Cauldron",
    chinese: "鼎",
    symbol: "☲",
    trigrams: { upper: "Wind", lower: "Fire" },
    judgment: "The Cauldron judgment",
    keywords: ["cauldron", "vessel", "nourishment", "ritual"],
    rulingLine: "The great man rules as with a furnace.",
    lines: [
      "The great man rules as with a furnace.",
      "The great man rules as with a furnace.",
      "The great man rules as with a furnace.",
      "The great man rules as with a furnace.",
      "The great man rules as with a furnace.",
      "The great man rules as with a furnace."
    ],
    upper: {
      brief: "The cauldron transforms through fire.",
      meaning: "Fire beneath wind—the cauldron transforms what it holds. The vessel of civilization nourishes and transforms.",
      guidance: "Transform through refinement. The cauldron creates change. Choose what enters your vessel."
    },
    lower: {
      brief: "Corrupted vessel or wrong nourishment.",
      meaning: "The Cauldron reversed suggests corrupted contents, wrong nourishment, or the vessel breaking.",
      guidance: "Check what's in your cauldron. Nourishment requires pure ingredients. Clean the vessel."
    },
    image: "Fire over wind: the image of the Cauldron. Thus the superior man makes his position secure and his food sufficient.",
    nucleus: ["cauldron", "vessel", "nourishment", "transformation", "ritual"],
    element: "Fire",
    astrology: "Venus"
  },
  {
    id: 51,
    name: "Arousing",
    chinese: "震",
    symbol: "☳",
    trigrams: { upper: "Thunder", lower: "Thunder" },
    judgment: "Arousing judgment",
    keywords: ["arousing", "thunder", "shock", "movement"],
    rulingLine: "The frightful shock dissipates.",
    lines: [
      "The frightful shock dissipates.",
      "The frightful shock dissipates.",
      "The frightful shock dissipates.",
      "The frightful shock dissipates.",
      "The frightful shock dissipates.",
      "The frightful shock dissipates."
    ],
    upper: {
      brief: "Shock brings arousal and awakening.",
      meaning: "Thunder doubled—the shock that awakens. Arousing through fear can be beneficial. Shock brings movement from stagnation.",
      guidance: "Let shock awaken you. Movement emerges from stillness. The frightful shake may save you."
    },
    lower: {
      brief: "Excessive shock or constant trembling.",
      meaning: "Arousing reversed suggests being overwhelmed by shock, constant anxiety, or becoming paralyzed by fear.",
      guidance: "Recover from the shock. Don't let fear rule. Stability returns after trembling."
    },
    image: "Thunder doubles: the image of Arousing. Thus the superior man is inexhaustible in his fearfulness.",
    nucleus: ["arousal", "thunder", "shock", "movement", "fear"],
    element: "Wood",
    astrology: "Mars"
  },
  {
    id: 52,
    name: "Keeping Still",
    chinese: "艮",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Mountain" },
    judgment: "Keeping Still judgment",
    keywords: ["keeping still", "mountain", "stopping", "meditation"],
    rulingLine: "One does not eat one's own flour.",
    lines: [
      "One does not eat one's own flour.",
      "One does not eat one's own flour.",
      "One does not eat one's own flour.",
      "One does not eat one's own flour.",
      "One does not eat one's own flour.",
      "One does not eat one's own flour."
    ],
    upper: {
      brief: "Keeping still brings accomplishment.",
      meaning: "Mountain doubled—stilling the mind. Stillness is not inactivity but purposeful restraint. Meditative focus accomplishes.",
      guidance: "Keep still within. Focus your mind. Stillness achieves what movement cannot."
    },
    lower: {
      brief: "Trembling or inability to stop.",
      meaning: "Keeping Still reversed suggests restlessness, inability to stop, or keeping still out of fear rather than wisdom.",
      guidance: "Find true stillness. Not all movement is necessary. Stillness is a choice."
    },
    image: "Mountain doubles: the image of Keeping Still. Thus the superior man does not permit his thoughts to go beyond his position.",
    nucleus: ["stillness", "stopping", "meditation", "mountain"],
    element: "Earth",
    astrology: "Saturn"
  },
  {
    id: 53,
    name: "Development",
    chinese: "渐",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Mountain" },
    judgment: "Development judgment",
    keywords: ["development", "gradual progress", "marriage", "sequence"],
    rulingLine: "The bird in the forest is the way.",
    lines: [
      "The bird in the forest is the way.",
      "The bird in the forest is the way.",
      "The bird in the forest is the way.",
      "The bird in the forest is the way.",
      "The bird in the forest is the way.",
      "The bird in the forest is the way."
    ],
    upper: {
      brief: "Development through gradual advancement.",
      meaning: "Wind moves over mountain—gradual progression. Development requires patience and proper sequence. Marriage develops slowly.",
      guidance: "Progress gradually. Development takes time. Follow the proper sequence for lasting results."
    },
    lower: {
      brief: "False development or forced progress.",
      meaning: "Development reversed suggests rushing development, improper sequence, or growth that undermines foundations.",
      guidance: "Don't rush development. Proper sequence matters. Sustainable growth takes time."
    },
    image: "Wind over mountain: the image of Development. Thus the superior man is inexhaustible in his teaching.",
    nucleus: ["development", "gradual", "progress", "marriage", "sequence"],
    element: "Wood",
    astrology: "Venus"
  },
  {
    id: 54,
    name: "Marrying",
    chinese: "归妹",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Thunder" },
    judgment: "Marrying judgment",
    keywords: ["marrying", "maiden", "union", "partnership"],
    rulingLine: "One marries one's daughter.",
    lines: [
      "One marries one's daughter.",
      "One marries one's daughter.",
      "One marries one's daughter.",
      "One marries one's daughter.",
      "One marries one's daughter.",
      "One marries one's daughter."
    ],
    upper: {
      brief: "Marriage has proper form and meaning.",
      meaning: "Thunder beneath lake—young maiden beneath true nature. Marriage must have proper form and genuine connection.",
      guidance: "Honor the form of union. Marriage requires truth. Choose partnerships carefully."
    },
    lower: {
      brief: "Improper marriage or false union.",
      meaning: "Marrying reversed suggests improper marriage, one-sided partnership, or union without proper form.",
      guidance: "Examine the union. True marriage serves both parties. Form matters."
    },
    image: "Thunder beneath the lake: the image of Marrying. Thus the superior man understands the four seasons.",
    nucleus: ["marriage", "maiden", "union", "partnership"],
    element: "Metal",
    astrology: "Venus"
  },
  {
    id: 55,
    name: "Abundance",
    chinese: "丰",
    symbol: "☲",
    trigrams: { upper: "Fire", lower: "Thunder" },
    judgment: "Abundance judgment",
    keywords: ["abundance", "fullness", "richness", "plenitude"],
    rulingLine: "One's own side is destroyed. One's own side is preserved.",
    lines: [
      "One's own side is destroyed. One's own side is preserved.",
      "One's own side is destroyed. One's own side is preserved.",
      "One's own side is destroyed. One's own side is preserved.",
      "One's own side is destroyed. One's own side is preserved.",
      "One's own side is destroyed. One's own side is preserved.",
      "One's own side is destroyed. One's own side is preserved."
    ],
    upper: {
      brief: "Abundance peaks then diminishes.",
      meaning: "Thunder and fire together—great brightness and abundance. Abundance reaches its peak, but decline follows fullness.",
      guidance: "Enjoy the abundance while it lasts. Peak fullness precedes change. Prepare for transition."
    },
    lower: {
      brief: "Excess or false abundance.",
      meaning: "Abundance reversed suggests excess, illusion of fullness, or clinging to abundance that is ending.",
      guidance: "Recognize the turning point. Abundance is not eternal. Let go gracefully."
    },
    image: "Thunder and lightning: the image of Abundance. Thus the superior man is inexhaustible in his judicial decisions.",
    nucleus: ["abundance", "fullness", "richness", "plenitude"],
    element: "Fire",
    astrology: "Jupiter"
  },
  {
    id: 56,
    name: "Traveler",
    chinese: "旅",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Fire" },
    judgment: "Traveler judgment",
    keywords: ["traveler", "wandering", "journey", "stranger"],
    rulingLine: "The bird burns its nest.",
    lines: [
      "The bird burns its nest.",
      "The bird burns its nest.",
      "The bird burns its nest.",
      "The bird burns its nest.",
      "The bird burns its nest.",
      "The bird burns its nest."
    ],
    upper: {
      brief: "The traveler finds temporary shelter.",
      meaning: "Fire on the mountain—the traveler's light. The wanderer must adapt and find shelter among strangers.",
      guidance: "Be flexible as a traveler. Adapt to circumstances. Temporary shelter is the traveler's home."
    },
    lower: {
      brief: "Homelessness or constant wandering.",
      meaning: "Traveler reversed suggests being displaced, unable to settle, or wanderlust that destroys home.",
      guidance: "Find your home. Constant wandering exhausts. Every traveler needs a place to return."
    },
    image: "Fire on the mountain: the image of the Traveler. Thus the superior man is inexhaustible in his punishment and does not let his people accumulate.",
    nucleus: ["traveler", "wandering", "journey", "stranger"],
    element: "Fire",
    astrology: "Mercury"
  },
  {
    id: 57,
    name: "Gentle",
    chinese: "巽",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Wind" },
    judgment: "Gentle judgment",
    keywords: ["gentle", "penetration", "flexibility", "wood"],
    rulingLine: "The wings of the crane are in the abyss.",
    lines: [
      "The wings of the crane are in the abyss.",
      "The wings of the crane are in the abyss.",
      "The wings of the crane are in the abyss.",
      "The wings of the crane are in the abyss.",
      "The wings of the crane are in the abyss.",
      "The wings of the crane are in the abyss."
    ],
    upper: {
      brief: "Gentleness penetrates where force cannot.",
      meaning: "Wind doubled—penetrating gentleness. True strength lies in flexibility and persistence, not force. Gentle penetration accomplishes much.",
      guidance: "Be gentle but persistent. Wind accomplishes what stone cannot. Flexibility is true strength."
    },
    lower: {
      brief: "Excessive yielding or weakness.",
      meaning: "Gentle reversed suggests excessive submission, weak flexibility, or being too yielding to others' will.",
      guidance: "Balance gentleness with strength. True flexibility has backbone. Don't yield everything."
    },
    image: "Wind doubles: the image of Gentleness. Thus the superior man executes his commands and fulfills his word.",
    nucleus: ["gentleness", "penetration", "flexibility", "wood"],
    element: "Wood",
    astrology: "Mercury"
  },
  {
    id: 58,
    name: "Joy",
    chinese: "兑",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Lake" },
    judgment: "Joy judgment",
    keywords: ["joy", "satisfaction", "pleasure", "harmony"],
    rulingLine: "One deceives the hawk and catches it.",
    lines: [
      "One deceives the hawk and catches it.",
      "One deceives the hawk and catches it.",
      "One deceives the hawk and catches it.",
      "One deceives the hawk and catches it.",
      "One deceives the hawk and catches it.",
      "One deceives the hawk and catches it."
    ],
    upper: {
      brief: "Joy shared multiplies.",
      meaning: "Lake doubled—joy doubled. True joy comes from harmony and shared pleasure. Sincere joy attracts and benefits.",
      guidance: "Share your joy. Joy multiplied among friends is true joy. Spread happiness."
    },
    lower: {
      brief: "False joy or empty pleasure.",
      meaning: "Joy reversed suggests superficial pleasure, shallow satisfaction, or joy at others' misfortune.",
      guidance: "Examine what brings you joy. True joy sustains. Hollow pleasure disappoints."
    },
    image: "Lake doubles: the image of Joy. Thus the superior man cultivates his friendships.",
    nucleus: ["joy", "satisfaction", "pleasure", "harmony"],
    element: "Metal",
    astrology: "Venus"
  },
  {
    id: 59,
    name: "Dispersion",
    chinese: "涣",
    symbol: "☴",
    trigrams: { upper: "Wind", lower: "Water" },
    judgment: "Dispersion judgment",
    keywords: ["dispersion", "dissolution", "scattering", "liberation"],
    rulingLine: "The king scatters the people.",
    lines: [
      "The king scatters the people.",
      "The king scatters the people.",
      "The king scatters the people.",
      "The king scatters the people.",
      "The king scatters the people.",
      "The king scatters the people."
    ],
    upper: {
      brief: "Dispersion breaks barriers.",
      meaning: "Wind over water—dispersing mists. Dispersion can liberate or destroy. Proper dispersion benefits, harmful dispersion harms.",
      guidance: "Know when to disperse. Breaking barriers can free or scatter. Choose wisely."
    },
    lower: {
      brief: "Scattering or disintegration.",
      meaning: "Dispersion reversed suggests destructive scattering, loss of cohesion, or disintegration of what should remain.",
      guidance: "Guard against harmful dispersion. Not everything should be scattered. Maintain essential unity."
    },
    image: "Wind over water: the image of Dispersion. Thus the superior man is inexhaustible in his offerings to the spirits.",
    nucleus: ["dispersion", "dissolution", "scattering", "liberation"],
    element: "Water",
    astrology: "Neptune"
  },
  {
    id: 60,
    name: "Limitation",
    chinese: "节",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Water" },
    judgment: "Limitation judgment",
    keywords: ["limitation", "restraint", "measure", "boundary"],
    rulingLine: "One is not limited in one's limitation.",
    lines: [
      "One is not limited in one's limitation.",
      "One is not limited in one's limitation.",
      "One is not limited in one's limitation.",
      "One is not limited in one's limitation.",
      "One is not limited in one's limitation.",
      "One is not limited in one's limitation."
    ],
    upper: {
      brief: "Limitation creates order and freedom.",
      meaning: "Water entering the lake is limited by the shore. True limitation creates freedom through order. Restraint enables success.",
      guidance: "Accept necessary limitations. Boundaries create freedom. Restraint enables abundance."
    },
    lower: {
      brief: "Excessive limitation or no restraint.",
      meaning: "Limitation reversed suggests excessive restriction, or complete lack of limitation leading to chaos.",
      guidance: "Find the balance. Too much or too little limitation harms. Measure is key."
    },
    image: "Lake above water: the image of Limitation. Thus the superior man is inexhaustible in his cultivation of himself.",
    nucleus: ["limitation", "restraint", "measure", "boundary"],
    element: "Water",
    astrology: "Saturn"
  },
  {
    id: 61,
    name: "Inner Truth",
    chinese: "中孚",
    symbol: "☱",
    trigrams: { upper: "Lake", lower: "Wind" },
    judgment: "Inner Truth judgment",
    keywords: ["inner truth", "sincerity", "pig", "frog"],
    rulingLine: "The crane calls in the hidden valley.",
    lines: [
      "The crane calls in the hidden valley.",
      "The crane calls in the hidden valley.",
      "The crane calls in the hidden valley.",
      "The crane calls in the hidden valley.",
      "The crane calls in the hidden valley.",
      "The crane calls in the hidden valley."
    ],
    upper: {
      brief: "Inner truth and sincerity bring success.",
      meaning: "Wind over lake—truth within. Inner truth is sincere and powerful. The heart's truth resonates across distance.",
      guidance: "Speak from inner truth. Sincerity resonates. True words carry power."
    },
    lower: {
      brief: "False sincerity or hollow words.",
      meaning: "Inner Truth reversed suggests false sincerity, empty words, or pretension that deceives.",
      guidance: "Let words match truth. Sincerity cannot be faked. Empty words eventually fail."
    },
    image: "Wind over lake: the image of Inner Truth. Thus the superior man administers the penal code with clearness.",
    nucleus: ["truth", "sincerity", "inner", "sincere words"],
    element: "Wood",
    astrology: "Neptune"
  },
  {
    id: 62,
    name: "Small Exceeding",
    chinese: "小过",
    symbol: "☶",
    trigrams: { upper: "Mountain", lower: "Thunder" },
    judgment: "Small Exceeding judgment",
    keywords: ["small exceeding", "excess", "birds", "carefulness"],
    rulingLine: "The flying bird brings misfortune.",
    lines: [
      "The flying bird brings misfortune.",
      "The flying bird brings misfortune.",
      "The flying bird brings misfortune.",
      "The flying bird brings misfortune.",
      "The flying bird brings misfortune.",
      "The flying bird brings misfortune."
    ],
    upper: {
      brief: "Small exceeding requires great care.",
      meaning: "Thunder on the mountain—small excess requires great caution. Minor transgressions must be carefully managed.",
      guidance: "Handle small excesses with care. Small transgressions matter. Caution prevents misfortune."
    },
    lower: {
      brief: "Excessive small errors.",
      meaning: "Small Exceeding reversed suggests accumulating small errors, or failing to correct minor excesses.",
      guidance: "Don't overlook small transgressions. They compound. Address small excesses before they grow."
    },
    image: "Thunder on the mountain: the image of Small Exceeding. Thus the superior man is inexhaustible in his fearfulness.",
    nucleus: ["small exceeding", "excess", "small transgression", "caution"],
    element: "Wood",
    astrology: "Uranus"
  },
  {
    id: 63,
    name: "After Completion",
    chinese: "既济",
    symbol: "☲",
    trigrams: { upper: "Water", lower: "Fire" },
    judgment: "After Completion judgment",
    keywords: ["after completion", "crossing water", "order", "success"],
    rulingLine: "One's own side is preserved.",
    lines: [
      "One's own side is preserved.",
      "One's own side is preserved.",
      "One's own side is preserved.",
      "One's own side is preserved.",
      "One's own side is preserved.",
      "One's own side is preserved."
    ],
    upper: {
      brief: "After completion, new cycles begin.",
      meaning: "Fire below water—they oppose yet balance. After completion, new difficulties emerge. Success contains the seed of failure.",
      guidance: "Success is not the end. New cycles begin. Watch for what follows completion."
    },
    lower: {
      brief: "Complacency or decline after success.",
      meaning: "After Completion reversed suggests complacency in success, or decline beginning from the peak.",
      guidance: "Don't rest on completion. What looks like success may contain failure. Vigilance continues."
    },
    image: "Water over fire: the image of After Completion. Thus the superior man is inexhaustible in his precautions.",
    nucleus: ["completion", "crossing", "order", "success", "after"],
    element: "Water",
    astrology: "Moon"
  },
  {
    id: 64,
    name: "Before Completion",
    chinese: "未济",
    symbol: "☵",
    trigrams: { upper: "Fire", lower: "Water" },
    judgment: "Before Completion judgment",
    keywords: ["before completion", "not yet crossed", "potential", "incompletion"],
    rulingLine: "One falls into the water.",
    lines: [
      "One falls into the water.",
      "One falls into the water.",
      "One falls into the water.",
      "One falls into the water.",
      "One falls into the water.",
      "One falls into the water."
    ],
    upper: {
      brief: "Before completion, anything is possible.",
      meaning: "Water below fire—not yet balanced. Before completion, success is not assured. The fox near the far shore may yet fail.",
      guidance: "Completion is not yet. Potential exists. Cautious approach matters. Don't rush the crossing."
    },
    lower: {
      brief: "Failed crossing or impossible completion.",
      meaning: "Before Completion reversed suggests the crossing cannot be completed, or failure near the end.",
      guidance: "The goal may be unreachable. Sometimes the far shore cannot be crossed. Accept incompletion."
    },
    image: "Fire over water: the image of Before Completion. Thus the superior man is inexhaustible in his caution when leading.",
    nucleus: ["incompletion", "not yet", "potential", "crossing"],
    element: "Water",
    astrology: "Mercury"
  }
];

export const getHexagramById = (id) => hexagrams.find(h => h.id === id);

export const getHexagramByLines = (lines) => {
  const upper = parseInt(lines.slice(0, 3).join(''), 2);
  const lower = parseInt(lines.slice(3, 6).join(''), 2);
  const id = upper * 8 + lower + 1;
  return getHexagramById(id);
};

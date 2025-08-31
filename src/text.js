export const aboutMe = `Hello, I'm Alex. I'm 22 years old and currently studying Mechatronics Engineering (BASc) at the University of British Columbia in Vancouver. I have experience with building consulting and automotive engineering, working at AME Group and Magna International respectively. I am also a member of UBC's Formula Electric team and was a member of UBC's Uncrewed Aircraft Systems team for 2 years. I am a FIRST Robotics and SHAD alumni. I'd like to research and explore the fields of Machine Learning and Robotics as I grow and explore my career. I am excited to explore new topics and delve into exciting projects.`
export const experience = {
  magna: {
    company: 'Magna International',
    role: 'Mechatronics CO-OP',
    link: '',
    date: [
      'Jan',
      'Aug 2025'
    ],
    desc: [
      'Developed automation tools for pre- and post-processing of simulations (FEA, MBD, Inertial Analysis) using TypeScript and Python tech stacks, streamlining the workflow for the global CAE teams',
      'Architected and deployed "Inertia+", a tool that automated component inertia calculations and report generation, leading to upwards of 26% time savings (270+ hours saved per quarter)',
      'Spearheaded the creation of "Collab Space," a web-based platform using JavaScript and Python to visualize FEA results, enabling real-time collaboration and faster design iteration'
    ],
  },
  ame1: {
    company: 'AME Group',
    role: 'Mechanical CO-OP',
    link: '',
    date: [
      'Sept',
      'Dec 2023',
    ],
    desc: [
      'Designed 15+ HVAC, Hydronic, and Plumbing layouts and schematics for mixed residential spaces in the Vancouver area using Revit and AutoCAD',
      'Optimized AutoCAD schedule/schematic creation using Python and Revit plugins to reduce repetitive work by 50%',
      'Prototyped automatic schematic creation in AutoCAD using PyAutoCAD'
    ],
  },
  ame2: {
    company: 'AME Group',
    role: 'QAQC CO-OP',
    link: '',
    date: [
      'May',
      'Aug 2024'
    ],
    desc: [
      'Wrote C# Macros to automate Revit tasks such as creating detailed schematics from MEP systems, simplifying drafting tasks, and converting AutoCAD details',
      'Led many BIM improvement projects for teams across AME, such as Revit Schematics and Revit Details, to reduce the need for AutoCAD, allowing the user to work solely in Revit, saving dozens of hours on 5+ projects'
    ]
  },
  lra3d: {
    company: 'LRA3D',
    role: 'Mechanical Designer / Fabricator Intern',
    link: '',
    date: [
      'May',
      'Aug 2023'
    ],
    desc: [
      'Custom-designed prop/set installations for 3 clients using Rhino 7, including a 20’ tall plywood guitar prop',
      'Scripted presets for CNC Routers and Hotwire machines using Mach 4 to increase machine efficiency by 20%',
      'Wired CNC Hotwire machine with EtherCAT technology to modernize production, reducing the CPU load by 30%'
    ],
  },
  fe: {
    company: 'UBC Formula Electric',
    role: 'Mechanical Team',
    link: '',
    date: [
      'May 2024',
      'Present'
    ],
    desc: [
      'Engineered a lap time simulation tool in MATLAB using vehicle dynamics models to predict competition performance within 75%',
      "Influenced key design decisions for the vehicle's powertrain and aerodynamics by providing data-driven estimates of how parameter changes would impact competition scores",
      'Planned and managed the testing and planning of the competition car'
    ],
  },
  uas: {
    company: 'UBC Uncrewed Aircraft Systems',
    role: 'Payload Team',
    link: '',
    date: [
      'Sept 2022',
      'Sept 2024'
    ],
    desc: [
      'Prototyped various payload drop systems, exploring technologies such as electromagnetic clutches and guided parachutes to control water bottle drops safely using Onshape',
      'Designed and manufactured a Carbon Fibre enclosure for our scale model taxi enclosure',
      'Achieved 2nd place in Phase 1 and 3rd place in Phase 2 of the 2024 AEAC competition',
    ],
  },
  frc: {
    company: 'FRC Team 610',
    role: 'Programming Lead',
    link: 'https://youtu.be/PK4EeCKIfhQ',
    date: [
      'Oct 2017',
      'Mar 2021'
    ],
    desc: [
      'Led prototyping on an indexer to manage the game pieces and move them throughout the 150lb robot',
      'Manufactured final and prototyping components using a CNC Router and a Milling Machine',
      'Improved the aiming of the robot by 50% accuracy using LED and reflection-based computer vision in Java'
    ],
  }
}
export const projects = {
  robocan: {
    project: 'RoboCan',
    extra: 'TOHacks CockRoachDB Award Winner',
    link: 'https://devpost.com/software/robocan',
    date: [
      'May 2022'
    ],
    desc: [
      'Built a mobile robotic trashcan to sort through reusable NFC-tagged cups',
      'Implemented MySQL database with  CockroachDB to store user data and communicate between systems',
      'Wrote Python code to  determine cup position and ID based on NFC sensors and I2C-controlled ultrasonic sensors'
    ]
  },
  sunnyview: {
    project: 'Sunnyview School Accessible Toys',
    extra: '',
    link: '',
    date: [
      'Mar 2021',
      'May 2021'
    ],
    desc: [
      'Designed an Arduino robotic hand to simplify the physical playing of a piano into a series of button presses by mimicking finger movement using Servo actuators',
      'Developed using Universal Design principles for children with learning and physical disabilities, such as Cerebral Palsy'
    ]
  },
  i6engine: {
    project: 'I6 Engine Model',
    extra: '',
    link: '',
    date: [
      ''
    ],
    desc: [
      'Designed a simple inline 6-cylinder car engine. (Only the crankshaft and pistons). Inline 6 engines have 3 pairs of cylinders and are timed to keep the engine balanced. Offset cylinders can be used to improve engine efficiency which led to the idea of using 2 crankshafts (one from each cylinder pair) to keep the engine balanced while using the new concept.',
      'The major flaw of this concept is connecting the two crankshafts as they are spinning counter to each other so a belt would not work. (SolidWorks)'
    ]
  }
}
import { VoragoRotation, VoragoHardmode } from './vorago-rotation.model'

/***
 * @hidden
 */
export class VoragoRotations {
  private ceilings: VoragoRotation = new VoragoRotation(
    'Ceiling Collapse',
    new VoragoHardmode('Team Split - Green Bomb', 'Team Split - Vitalis', 'Torso of Omens')
  )
  private scopulus: VoragoRotation = new VoragoRotation(
    'Scopulus',
    new VoragoHardmode('Purple Bomb - Team Split', 'Purple Bomb - Vitalis', 'Helm of Omens')
  )
  private vitalis: VoragoRotation = new VoragoRotation(
    'Vitalis',
    new VoragoHardmode('Vitalis - Purple Bomb', 'Vitalis - Bleeds', 'Legs of Omens')
  )
  private greenBomb: VoragoRotation = new VoragoRotation(
    'Green Bomb',
    new VoragoHardmode('Green Bomb - Vitalis', 'Team Split - Purple Bomb', 'Boots of Omens')
  )
  private teamSplit: VoragoRotation = new VoragoRotation(
    'Team Split',
    new VoragoHardmode('Team Split - Team Split', 'Team Split - Purple Bomb', 'Maul of Omens')
  )
  private theEnd: VoragoRotation = new VoragoRotation(
    'The End',
    new VoragoHardmode('Purple Bomb - Bleeds', 'Purple Bomb - Vitalis', 'Gloves of Omens')
  )

  constructor() {}
  rotation: VoragoRotation[] = [
    this.ceilings,
    this.scopulus,
    this.vitalis,
    this.greenBomb,
    this.teamSplit,
    this.theEnd
  ]
}

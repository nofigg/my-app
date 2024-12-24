import type { Project as ProjectType } from '../types'
import { project as dynamicMazeGame } from './dynamic-maze-game'
import { project as hardLookAtV0Prompting } from './hard-look-at-v0-prompting'
import { project as cadServicesLogo } from './cad-services-logo'

export type Project = ProjectType

export const projects = [
    dynamicMazeGame,
    hardLookAtV0Prompting,
    cadServicesLogo,
]

import { Project as ProjectTemplate } from './project-template'
import { dynamicMazeGame } from './dynamic-maze-game'
import { hardLookAtV0Prompting } from './hard-look-at-v0-prompting'
import { cadServicesLogo } from './cad-services-logo'

export type Project = ProjectTemplate

export const projects = [
    dynamicMazeGame,
    hardLookAtV0Prompting,
    cadServicesLogo,
]

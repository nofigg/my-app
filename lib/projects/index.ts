import { Project } from '../types'
import { dynamicMazeGame } from './dynamic-maze-game'
import { hardLookAtV0Prompting } from './hard-look-at-v0-prompting'
import { cadServicesLogo } from './cad-services-logo'

export type Project = Project

export const projects = [
    dynamicMazeGame,
    hardLookAtV0Prompting,
    cadServicesLogo,
]

export * from './commands/implementation';

import { CommandHandlers } from './commands/handlers';
import { Rules } from './rules';

export const UseCases = [...CommandHandlers, ...Rules];
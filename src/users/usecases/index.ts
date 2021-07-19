export * from './queries/implementation';
export * from './commands/implementation';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { Rules } from './rules';

export const UseCases = [...QueryHandlers, ...CommandHandlers, ...Rules];
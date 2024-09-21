import { Company } from '@/app/types';
import companies from '@/app/data/companies.json';

export function getCompanies(): Company[] {
    return companies.companies;
}

import { promises as fs } from 'fs';
import path from 'path';
import CompanyList from '@/app/components/CompanyList';
import { Company } from '@/app/types';

const getCompanies = async (): Promise<Company[]> => {
    const filePath = path.join(process.cwd(), 'src/app/data', 'companies.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents).companies;
};

const Home = async () => {
    const companies = await getCompanies();

    return <CompanyList companies={companies} />;
};

export default Home;

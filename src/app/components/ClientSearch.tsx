'use client';

import { useState } from 'react';
import SearchBar from '@/app/components/SearchBar';
import CompanyList from '@/app/components/CompanyList';
import { Company } from '@/app//types';

type ClientSearchProps = {
    initialCompanies: Company[];
};

const ClientSearch = ({ initialCompanies }: ClientSearchProps) => {
    const [companies, setCompanies] = useState(initialCompanies);

    const handleSearch = (query: string) => {
        const filteredCompanies = initialCompanies.filter((company) =>
            company.name.toLowerCase().includes(query.toLowerCase())
        );
        setCompanies(filteredCompanies);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <CompanyList companies={companies} />
        </>
    );
};

export default ClientSearch;

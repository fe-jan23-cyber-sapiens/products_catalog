import { Pagination } from '../components/Pagination';
import { CustomDropdown } from '../components/CustomDropdown';
import { BurgerMenu } from '../components/BurgerMenu/BurgerMenu';

export const HomePage = () => {
  return (
    <>
      <CustomDropdown
        options={['1', '2', '3', '4', '5', '65', '7']}
        handleItemsPerPageChange={() => {}}
      />

      <BurgerMenu />

      <Pagination
        total={10}
        perPage={5}
        currentPage={1}
        onPageChange={() => {}}
      />
    </>
  );
};

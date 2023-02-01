package poly.store.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import poly.store.entity.Authority;

@Repository
public interface AuthorityDAO extends JpaRepository<Authority, Integer>{

}

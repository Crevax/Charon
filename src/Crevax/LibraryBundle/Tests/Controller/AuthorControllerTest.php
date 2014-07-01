<?php

namespace Crevax\LibraryBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class AuthorControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/library/authors');

        $this->assertTrue($crawler->filter('html:contains("Authors")')->count() > 0);
    }
}

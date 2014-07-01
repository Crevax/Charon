<?php

namespace Crevax\DossierBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class DossierControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/profile');

        $this->assertTrue($crawler->filter('h1:contains("About Me")')->count() > 0);
    }
}
